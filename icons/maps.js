
      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M8.25 22.751c-.286 0-.568-.054-.836-.162l-6-2.4A2.24 2.24 0 010 18.1V3.727a1.491 1.491 0 01.91-1.383 1.485 1.485 0 011.149-.013l5.913 2.366a.724.724 0 00.265.053h.027a.76.76 0 00.265-.054l6.385-2.555a2.245 2.245 0 011.671 0l6 2.4A2.24 2.24 0 0124 6.631V21a1.494 1.494 0 01-1.499 1.504c-.191 0-.379-.036-.559-.108l-5.913-2.362a.77.77 0 00-.267-.054h-.022a.727.727 0 00-.267.054l-6.386 2.555a2.258 2.258 0 01-.837.162zM1.5 18.1c0 .309.185.582.472.697L7.5 21.008V6.121l-.086-.032-5.913-2.366L1.5 18.1zM9 21.008l5.914-2.366.086-.032V3.723L9.086 6.089A1.498 1.498 0 019 6.121v14.887zm7.585-2.366l5.914 2.362.001-14.373a.747.747 0 00-.471-.697L16.5 3.723V18.61l.085.032z"}})])
          )
        }
      }
    