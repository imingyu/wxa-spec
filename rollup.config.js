import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';

export default {
    entry: 'src/index.js',
    dest: 'dist/index.js',
    format: 'umd',
    moduleName: 'WxaSpec',
    sourceMap: true,
    plugins: [
        json(),
        resolve(),
        babel()
    ]
};