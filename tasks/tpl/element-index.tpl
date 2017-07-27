{@each arr as item}
import $${item[0]} from './${item[1]}.js';
{@/each}

export default {
    {@each arr as item}
    $${item[0]},
    {@/each}
}