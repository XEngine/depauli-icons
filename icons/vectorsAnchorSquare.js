
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
            children.concat([_c('path',{attrs:{"d":"M19.5 24c-.827 0-1.5-.673-1.5-1.5H6c0 .827-.673 1.5-1.5 1.5h-3C.673 24 0 23.327 0 22.5v-3c0-.827.673-1.5 1.5-1.5V6C.673 6 0 5.327 0 4.5v-3C0 .673.673 0 1.5 0h3C5.327 0 6 .673 6 1.5h12c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5v12c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-3zm0-1.5h3v-3h-3v3zm-18 0h3v-3h-3v3zM18 21v-1.5c0-.827.673-1.5 1.5-1.5H21V6h-1.5c-.827 0-1.5-.673-1.5-1.5V3H6v1.5C6 5.327 5.327 6 4.5 6H3v12h1.5c.827 0 1.5.673 1.5 1.5V21h12zm1.5-16.5h3v-3h-3v3zm-18 0h3v-3h-3v3z"}})])
          )
        }
      }
    