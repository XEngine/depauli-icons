
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
            children.concat([_c('path',{attrs:{"d":"M13.263 23.251a1.49 1.49 0 01-1.061-.439l-2.121-2.121a1.491 1.491 0 01-.44-1.061c0-.401.156-.778.44-1.061l3.364-3.365H1.498c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h11.947L10.081 5.84a1.488 1.488 0 01-.44-1.061c0-.401.156-.777.44-1.061l2.126-2.121a1.492 1.492 0 011.06-.438c.401 0 .778.156 1.061.439l9.011 9.017a2.254 2.254 0 010 3.183l-9.016 9.015a1.492 1.492 0 01-1.06.438zM1.498 13.704h13.757a.75.75 0 01.53 1.281l-4.644 4.646 2.121 2.121 9.017-9.015a.751.751 0 000-1.061l-9.011-9.018-2.127 2.122 4.645 4.644a.75.75 0 01-.53 1.281H1.498v2.999z"}})])
          )
        }
      }
    