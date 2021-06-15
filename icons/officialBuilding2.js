
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
            children.concat([_c('path',{attrs:{"d":"M2.25 21c-.827 0-1.5-.673-1.5-1.5V18c0-.827.673-1.5 1.5-1.5v-6H2c-.689 0-1.25-.561-1.25-1.25v-2C.75 6.561 1.311 6 2 6h.327C2.954 2.819 7.436 0 12 0s9.046 2.819 9.673 6H22c.689 0 1.25.561 1.25 1.25v2c0 .689-.561 1.25-1.25 1.25h-.25v6c.827 0 1.5.673 1.5 1.5v1.5c0 .827-.673 1.5-1.5 1.5H2.25zm0-1.5h19.5V18H2.25v1.5zm18-3v-6h-1.5v6h1.5zm-3 0v-6h-1.5v6h1.5zm-3 0v-6h-4.5v6h4.5zm-6 0v-6h-1.5v6h1.5zm-3 0v-6h-1.5v6h1.5zM21.75 9V7.5H2.25V9h19.5zm-1.62-3c-.712-2.331-4.538-4.5-8.13-4.5-3.592 0-7.418 2.169-8.13 4.5h16.26zM1.5 24a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21z"}})])
          )
        }
      }
    