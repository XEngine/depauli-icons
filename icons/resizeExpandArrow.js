
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
            children.concat([_c('path',{attrs:{"d":"M19.5 24c-.827 0-1.5-.673-1.5-1.5H3.75a2.252 2.252 0 01-2.25-2.25V6C.673 6 0 5.327 0 4.5v-3C0 .673.673 0 1.5 0h3C5.327 0 6 .673 6 1.5h12c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5v12c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-3zm0-1.5h3v-3h-3v3zM18 21v-1.5c0-.827.673-1.5 1.5-1.5H21V6h-1.5c-.827 0-1.5-.673-1.5-1.5V3H6v1.5C6 5.327 5.327 6 4.5 6H3v7.5h6.439l4.5-4.5H10.5a.75.75 0 010-1.5h5.25a.735.735 0 01.293.06.75.75 0 01.401.405l.01.026a.73.73 0 01.047.26v5.25A.75.75 0 1115 13.5v-3.439l-4.5 4.5V21H18zm-15-.75c0 .414.336.75.75.75H9v-6H3v5.25zM19.5 4.5h3v-3h-3v3zm-18 0h3v-3h-3v3z"}})])
          )
        }
      }
    