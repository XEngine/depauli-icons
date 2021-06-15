
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
            children.concat([_c('path',{attrs:{"d":"M1.5 24C.673 24 0 23.327 0 22.5V12c0-.827.673-1.5 1.5-1.5h2.25v-9c0-.827.673-1.5 1.5-1.5h10.5c.827 0 1.5.673 1.5 1.5v3.75h5.25c.827 0 1.5.673 1.5 1.5v9c0 .827-.673 1.5-1.5 1.5h-8.25v5.25c0 .827-.673 1.5-1.5 1.5H1.5zm11.25-1.5V12h-1.5a.75.75 0 010-1.5h4.5v-9H5.25v9h1.5a.75.75 0 010 1.5H1.5v4.5H6a.75.75 0 01.75.75v5.25h6zm-11.25 0h3.75V21H1.5v1.5zm3.75-3V18H1.5v1.5h3.75zm17.25-3.75v-9h-5.25v3.75c0 .827-.673 1.5-1.5 1.5h-1.5v3.75h8.25z"}})])
          )
        }
      }
    