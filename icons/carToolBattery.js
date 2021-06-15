
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
            children.concat([_c('path',{attrs:{"d":"M1.75 21C.785 21 0 20.215 0 19.25v-13C0 5.285.785 4.5 1.75 4.5H3V3.25c0-.965.785-1.75 1.75-1.75h2.5C8.215 1.5 9 2.285 9 3.25V4.5h6V3.25c0-.965.785-1.75 1.75-1.75h2.5c.965 0 1.75.785 1.75 1.75V4.5h1.25c.965 0 1.75.785 1.75 1.75v13c0 .965-.785 1.75-1.75 1.75H1.75zm0-15a.25.25 0 00-.25.25v13c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25v-13a.25.25 0 00-.25-.25H1.75zM19.5 4.5V3.25a.25.25 0 00-.25-.25h-2.5a.25.25 0 00-.25.25V4.5h3zm-12 0V3.25A.25.25 0 007.25 3h-2.5a.25.25 0 00-.25.25V4.5h3z"}}),_c('path',{attrs:{"d":"M3.75 13.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM18.75 15a.75.75 0 01-.75-.75v-.75h-.75a.75.75 0 010-1.5H18v-.75a.75.75 0 011.5 0V12h.75a.75.75 0 010 1.5h-.75v.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    