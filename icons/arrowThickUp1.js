
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
            children.concat([_c('path',{attrs:{"d":"M10.55 24.001c-.827 0-1.5-.673-1.5-1.5V10.554l-3.368 3.365a1.49 1.49 0 01-1.061.438 1.49 1.49 0 01-1.061-.439l-2.12-2.121a1.502 1.502 0 010-2.122L10.455.659A2.244 2.244 0 0112.046 0c.602 0 1.167.234 1.591.659l9.019 9.016a1.502 1.502 0 010 2.122l-2.121 2.121a1.49 1.49 0 01-1.061.439 1.49 1.49 0 01-1.061-.439l-3.364-3.364V22.5c0 .827-.673 1.5-1.5 1.5H10.55zM9.8 7.994a.747.747 0 01.75.75v13.757h3V8.744a.747.747 0 01.75-.75c.201 0 .389.078.531.22l4.644 4.644 2.122-2.121-9.019-9.016a.743.743 0 00-.531-.22.744.744 0 00-.53.219L2.5 10.736l2.121 2.121L9.27 8.214a.743.743 0 01.53-.22z"}})])
          )
        }
      }
    