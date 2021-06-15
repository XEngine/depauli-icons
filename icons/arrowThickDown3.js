
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
            children.concat([_c('path',{attrs:{"d":"M11.999 24c-.401 0-.777-.156-1.06-.44l-7.281-7.28A2.265 2.265 0 013 14.689v-3.932c0-.4.156-.777.439-1.059.283-.284.66-.44 1.061-.44.401 0 .777.156 1.06.438L9 13.136V1.5C9 .673 9.673 0 10.5 0h3c.827 0 1.5.673 1.5 1.5v11.636l3.44-3.44a1.488 1.488 0 011.059-.439c.401 0 .778.156 1.061.438.283.283.44.66.44 1.06v3.933c0 .592-.24 1.172-.659 1.591l-7.281 7.28c-.283.285-.66.441-1.061.441zM4.5 14.689c0 .198.08.391.219.531L12 22.5l7.281-7.28a.758.758 0 00.219-.53v-3.932l-4.72 4.72a.745.745 0 01-.818.163.75.75 0 01-.463-.693V1.5h-3v13.447a.75.75 0 01-1.28.53l-4.72-4.72.001 3.932z"}})])
          )
        }
      }
    