
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
            children.concat([_c('path',{attrs:{"d":"M22.5 24a.75.75 0 01-.75-.75v-.75H2.25v.75a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0V18h2.652A3.004 3.004 0 017.5 13.5a3.004 3.004 0 012.598 4.5h1.152v-3.75a.75.75 0 01.75-.75h8.5a2.754 2.754 0 012.75 2.75v7a.75.75 0 01-.75.75zm-.75-3v-1.5H2.25V21h19.5zm0-3v-1.75c0-.689-.561-1.25-1.25-1.25h-7.75v3h9zM7.5 15c-.827 0-1.5.673-1.5 1.5S6.673 18 7.5 18 9 17.327 9 16.5 8.327 15 7.5 15zM11.25 12c-.827 0-1.5-.673-1.5-1.5V9h-1.5c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h1.5V1.5c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5V3h1.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-1.5v1.5c0 .827-.673 1.5-1.5 1.5h-3zm-3-4.5h2.25a.75.75 0 01.75.75v2.25h3V8.25A.75.75 0 0115 7.5h2.25v-3H15a.75.75 0 01-.75-.75V1.5h-3v2.25a.75.75 0 01-.75.75H8.25v3z"}})])
          )
        }
      }
    