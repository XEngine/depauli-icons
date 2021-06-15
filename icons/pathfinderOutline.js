
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
            children.concat([_c('path',{attrs:{"d":"M1.5 15C.673 15 0 14.327 0 13.5V2.25A2.252 2.252 0 012.25 0H13.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5H6v7.5c0 .827-4.5 1.5-4.5 1.5zm.75-13.5a.75.75 0 00-.75.75V13.5h3V6c0-.827.673-1.5 1.5-1.5h7.5v-3H2.25zM10.5 24c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5H18v-7.5c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v11.25A2.252 2.252 0 0121.75 24H10.5zm0-1.5h11.25a.75.75 0 00.75-.75V10.5h-3V18c0 .827-.673 1.5-1.5 1.5h-7.5v3z"}}),_c('path',{attrs:{"d":"M9.25 16.5c-.965 0-1.75-.785-1.75-1.75v-5.5c0-.965.785-1.75 1.75-1.75h5.5c.965 0 1.75.785 1.75 1.75v5.5c0 .965-.785 1.75-1.75 1.75h-5.5zm0-7.5a.25.25 0 00-.25.25v5.5c0 .138.112.25.25.25h5.5a.25.25 0 00.25-.25v-5.5a.25.25 0 00-.25-.25h-5.5z"}})])
          )
        }
      }
    