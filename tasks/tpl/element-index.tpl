{@each arr as item}
import $${item[0]} from './${item[1]}.js';
{@/each}

var eles=Object.keys({ {@each arr as item}'$${item[1]}':true,{@/each} });

export default {
    {@each arr as item}$${item[0]},{@/each}
    elements:eles
}