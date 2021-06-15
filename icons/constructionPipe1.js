
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
            children.concat([_c('path',{attrs:{"d":"M1.5 24C.673 24 0 23.327 0 22.5v-6c0-.827.673-1.5 1.5-1.5H3c.827 0 1.5.673 1.5 1.5h.75a3.727 3.727 0 003.107-1.65A1.5 1.5 0 017.5 13.5v-3C7.5 9.673 8.173 9 9 9h.258c1.05-4.348 4.992-7.483 9.489-7.5h.753c0-.827.673-1.5 1.5-1.5h1.5c.827 0 1.5.673 1.5 1.5v6c0 .827-.673 1.5-1.5 1.5H21c-.827 0-1.5-.673-1.5-1.5h-.75a3.725 3.725 0 00-3.107 1.65 1.5 1.5 0 01.857 1.35v3c0 .827-.673 1.5-1.5 1.5h-.258c-1.049 4.348-4.991 7.484-9.49 7.5H4.5c0 .827-.673 1.5-1.5 1.5H1.5zm0-1.5H3v-6H1.5v6zM5.25 21a8.254 8.254 0 007.944-6H9.995a5.226 5.226 0 01-4.739 3H4.5v3h.75zM9 13.5h6v-3H9v3zM14.004 9a5.227 5.227 0 014.739-3h.757V3h-.749a8.257 8.257 0 00-7.945 6h3.198zM21 7.5h1.5v-6H21v6z"}})])
          )
        }
      }
    