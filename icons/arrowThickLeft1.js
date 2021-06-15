
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
            children.concat([_c('path',{attrs:{"d":"M10.735 22.999a1.49 1.49 0 01-1.061-.439L.658 13.545a2.24 2.24 0 01-.659-1.592c0-.601.234-1.166.659-1.591l9.016-9.015a1.49 1.49 0 011.061-.439c.401 0 .778.156 1.061.439l2.121 2.121c.284.284.44.661.44 1.061 0 .401-.156.777-.44 1.06l-3.362 3.36H22.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5H10.553l3.365 3.368c.283.283.439.66.438 1.061 0 .401-.156.778-.439 1.061l-2.121 2.121a1.49 1.49 0 01-1.061.439zM1.719 11.423a.744.744 0 00-.22.53.744.744 0 00.241.554l8.994 8.992 2.121-2.121-4.642-4.648a.75.75 0 01.531-1.28H22.5v-3H8.743a.748.748 0 01-.53-1.281l4.644-4.64-2.121-2.121-9.017 9.015z"}})])
          )
        }
      }
    