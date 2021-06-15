
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
            children.concat([_c('path',{attrs:{"d":"M18.75 24a.75.75 0 01-.75-.75V21H6v2.25a.75.75 0 01-1.5 0V21H.75a.75.75 0 010-1.5h1.14l2.55-3.188a1.494 1.494 0 011.169-.562H6V13.5H2.25a.75.75 0 010-1.5h1.14l2.55-3.188a1.497 1.497 0 011.169-.562H7.5V6H3.75a.75.75 0 010-1.5h1.189L7.5 1.94c.283-.284.66-.44 1.061-.44h2.689V.75a.75.75 0 011.5 0v.75h2.689c.401 0 .778.156 1.061.44l2.56 2.56h1.189A.75.75 0 1120.25 6H16.5v2.25h.39c.458.001.884.205 1.17.561L20.61 12h1.14a.75.75 0 010 1.5H18v2.25h.39c.458.001.884.205 1.17.561l2.551 3.189h1.14a.75.75 0 11-.001 1.5H19.5v2.25a.75.75 0 01-.75.75zm1.44-4.5l-1.8-2.25H5.61l-1.8 2.25h16.38zm-3.69-3.75V13.5h-9v2.25h9zM18.689 12l-1.8-2.25h-9.78L5.31 12h13.379zM15 8.25V6H9v2.25h6zm1.939-3.75L15.44 3H8.56l-1.5 1.5h9.879z"}})])
          )
        }
      }
    