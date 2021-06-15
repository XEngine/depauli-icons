
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M16.5 18a.75.75 0 010-1.5h.596l-1.854-9.888A.75.75 0 0014.505 6h-.255v6.75a.75.75 0 01-1.5 0V6h-1.5v6.75a.75.75 0 01-1.5 0V6h-.255a.75.75 0 00-.737.612L6.904 16.5H7.5a.75.75 0 010 1.5h-3a.75.75 0 010-1.5h.878L7.284 6.336A2.25 2.25 0 019.495 4.5h5.01a2.25 2.25 0 012.211 1.836L18.623 16.5h.877a.75.75 0 010 1.5h-3z"}}),_c('path',{attrs:{"d":"M12.005 16.5a6.76 6.76 0 01-2.375-.431.751.751 0 01.525-1.406 5.238 5.238 0 003.915-.087.75.75 0 11.588 1.38 6.732 6.732 0 01-2.653.544z"}})])
          )
        }
      }
    