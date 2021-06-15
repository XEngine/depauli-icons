
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
            children.concat([_c('path',{attrs:{"d":"M7.25 24C6.561 24 6 23.439 6 22.75v-9.5c0-.689.561-1.25 1.25-1.25H9v-1.518A1.753 1.753 0 017.5 8.75v-7.5C7.5.561 8.061 0 8.75 0h6.5c.689 0 1.25.561 1.25 1.25v7.5c0 .88-.653 1.61-1.5 1.732V12h1.75c.689 0 1.25.561 1.25 1.25v9.5c0 .689-.561 1.25-1.25 1.25h-9.5zm9.25-1.5v-6h-9v6h2.115l-.605-3.626A.752.752 0 019.75 18h4.5a.75.75 0 01.74.873l-.605 3.627H16.5zm-3.635 0l.5-3h-2.729l.5 3h1.729zM16.5 15v-1.5h-9V15h9zm-3-3v-1.5h-3V12h3zM9 8.75c0 .138.112.25.25.25h5.5a.25.25 0 00.25-.25V1.5H9V3h2.25a.75.75 0 010 1.5H9V6h2.25a.75.75 0 010 1.5H9v1.25z"}})])
          )
        }
      }
    