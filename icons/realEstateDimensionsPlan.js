
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24a.75.75 0 010-1.5H9v-7c0-.689.561-1.25 1.25-1.25h2.5v-3c0-.827.673-1.5 1.5-1.5h4.5v-1.5a.75.75 0 011.5 0v1.5H21c.827 0 1.5.673 1.5 1.5V22.5h.75a.75.75 0 010 1.5h-15zM21 22.5v-3.75h-1.5a.75.75 0 010-1.5H21v-1.5h-1.5a.75.75 0 010-1.5H21v-3h-6.75v3H16c.689 0 1.25.561 1.25 1.25v7H21zm-5.25 0v-3.75H13.5a.75.75 0 010-1.5h2.25v-1.5H10.5v6.75h5.25z"}}),_c('path',{attrs:{"d":"M1.5 24C.673 24 0 23.327 0 22.5v-21C0 .673.673 0 1.5 0h21c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5H6v16.5c0 .827-.673 1.5-1.5 1.5h-3zm0-1.5h3V18h-.75a.75.75 0 010-1.5h.75V12h-.75a.75.75 0 010-1.5h.75V6h-3v16.5zm21-18v-3H6v3h4.5v-.75a.75.75 0 011.5 0v.75h4.5v-.75a.75.75 0 011.5 0v.75h4.5zm-18 0v-3h-3v3h3z"}})])
          )
        }
      }
    