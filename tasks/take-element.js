var path = require('path'),
    fs = require('fs'),
    S = require('string'),
    juicer = require('juicer'),
    axios = require('axios'),
    JSDOM = require('jsdom').JSDOM,
    jquery = require('jquery'),
    beautify = require('js-beautify').js_beautify,
    beautifyOptions = {
        indent_size: 0
    },
    fileWritePath = path.resolve(__dirname, '../src/element'),
    tplElementIndex = juicer(fs.readFileSync(path.join(__dirname, '/tpl/element-index.tpl'), 'utf8')),
    tplElement = juicer(fs.readFileSync(path.join(__dirname, '/tpl/element.tpl'), 'utf8'));

juicer.set('strip', false);

function loadElementDocUrls() {
    var url = 'https://mp.weixin.qq.com/debug/wxadoc/dev/component/';
    return axios.get(url).then(res => {
        return res.data;
    }).then(html => {
        return getElementDocUrls(html, url);
    });
}

function getElementDocUrls(html, baseUrl) {
    var dom = new JSDOM(html),
        document = dom.window.document,
        navs = document.querySelectorAll('nav[role="navigation"] li.chapter'),
        docs = {};

    Array.prototype.forEach.call(navs, item => {
        var ul = item.querySelectorAll('.articles');
        if (ul && ul.length > 0) {
            return;
        }
        docs[item.attributes['data-name'].value] = baseUrl + item.attributes['data-path'].value;
    });
    return docs;
}

function parseDetailPage(url) {
    console.log(`loading... ${url}`);
    return axios.get(url).then(res => {
        return res.data;
    }).then(html => {
        var dom = new JSDOM(html),
            $ = jquery(dom.window),
            data = [];

        $('h4[id]').each((i, h4) => {
            h4 = $(h4);

            var spec = {},
                table = h4.nextAll('table').first(),
                p = table.prev('p'),
                trs = table.find('tbody>tr');
            spec.name = h4.text();
            spec.desc = p.text();
            spec.props = [];
            spec.events = {};
            if (spec.name == 'Bug & Tip' || spec.name == 'Tips') {
                return;
            }

            trs.each((ti, tr) => {
                tr = $(tr);
                var tds = tr.children('td');
                var val = {
                    name: $(tds[0]).text(),
                    type: $(tds[1]).text(),
                    default: $(tds[2]).text(),
                    desc: $(tds[3]).text(),
                    minVersion: tds.length > 4 ? $(tds[4]).text() : undefined,
                };
                if (val.name.trim() === "无") {
                    return;
                }
                if (!val.minVersion) {
                    delete val.minVersion;
                }
                if (!val.default) {
                    delete val.default;
                }
                if (val.type === 'Number' && val.default) {
                    val.default = parseFloat(val.default);
                }
                spec.props.push(val);
            });

            spec.props = spec.props.filter((item, index) => {
                if (item.name.indexOf('bind') == 0 || item.name.indexOf('catch') == 0) {
                    var eventName = item.name.replace('bind', '').replace('catch', ''),
                        event = {
                            name: eventName,
                            type: eventName,
                            desc: item.desc,
                            bindable: true,
                            catchable: false
                        };
                    if (item.minVersion) {
                        spec.minVersion = parseFloat(item.minVersion);
                    }
                    if (spec.events[event.name] && item.name.indexOf('catch') == 0) {
                        spec.events[event.name].catchable = true;
                    } else {
                        spec.events[event.name] = event;
                    }
                    return false;
                }
                return true;
            });

            //某些element属性存在有限制限制
            $('strong:contains("有效值")').each((yi, item) => {
                item = $(item);
                var text = item.text();
                text = text.replace('有效值', '').replace("：", '').replace(':', '');
                var prop = text.trim();
                var propItem = spec.props.find(p => {
                    return p.name == prop;
                });

                if (propItem) {
                    propItem.values = [];
                    var tb = item.parent().nextAll('table').first(),
                        trs = tb.find('tbody>tr');
                    if (trs && trs.length > 0) {
                        trs.each((ti, tr) => {
                            tr = $(tr);
                            var tds = tr.children('td');
                            var valItem = {
                                value: $(tds[0]).text()
                            };
                            if (tds.length > 1) {
                                valItem.desc = $(tds[1]).text();
                            }
                            if (tds.length > 2) {
                                valItem.minVersion = $(tds[2]).text();
                            }
                            propItem.values.push(valItem);
                        });
                    }
                }
            });

            data.push(spec);
        });

        return data;
    }).then(arr => {
        arr.forEach(item => {
            writeFile(item);
        });
        return arr;
    }).catch(err => {
        console.error(`error... ${url}\r\n${err}`);
    })
}

function writeFile(spec) {
    var fileName = fileWritePath + "/" + spec.name + '.js',
        content = JSON.stringify(spec);
    content = content.replace(/"String"/g, 'types.String')
        .replace(/"Boolean"/g, 'types.Boolean')
        .replace(/"Any"/g, 'types.Any')
        .replace(/"Color"/g, 'types.Color')
        .replace(/"Number"/g, 'types.Number')
        .replace(/"Array"/g, 'types.Array')
        .replace(/"Function"/g, 'types.Function')
        .replace(/"default":"false"/g, '"default":false')
        .replace(/"default":"true"/g, '"default":true');

    content = beautify(tplElement.render({
        spec: content
    }), beautifyOptions);
    fs.writeFileSync(fileName, content, 'utf8');
    console.log(`writed ${fileName}\r\n\r\n`);
}


console.log('taking...');
loadElementDocUrls().then(urls => {
    console.log('parsed navs.\r\n\r\n');

    var arr = [];
    for (var tagName in urls) {
        var url = urls[tagName];
        arr.push([tagName, url]);
    }
    return arr;
}).then(arr => {
    var fullElements = [];
    function run() {
        if (arr.length > 0) {
            var item = arr.pop();
            parseDetailPage(item[1]).then(data => {
                run();
                data.forEach(di => {
                    fullElements.push(di.name);
                });

                if (arr.length == 0) {
                    var arr2 = [];
                    fullElements.forEach(fi => {
                        arr2.push([S('wxa-' + fi).camelize().s, fi]);
                    });
                    fs.writeFile(fileWritePath + '/index.js', beautify(tplElementIndex.render({
                        arr: arr2
                    }), beautifyOptions), 'utf8');
                }
            });
        }
    }
    run();
}).catch(error => {
    console.error(error);
});