
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
            children.concat([_c('path',{attrs:{"d":"M13.5 14.25a.75.75 0 01-.75-.75V6a.75.75 0 01.75-.75H15A3.754 3.754 0 0118.75 9v1.5A3.754 3.754 0 0115 14.25h-1.5zm1.5-1.5a2.252 2.252 0 002.25-2.25V9A2.252 2.252 0 0015 6.75h-.75v6H15zM7.5 14.25A2.252 2.252 0 015.25 12a.75.75 0 011.5 0c0 .414.336.75.75.75h1.135a1.126 1.126 0 00-.001-2.25h-.012A.751.751 0 018.625 9h.026a1.124 1.124 0 00-.018-2.25H7.5c-.414 0-.75.336-.75.75a.75.75 0 01-1.5 0A2.252 2.252 0 017.5 5.25h1.135a2.608 2.608 0 011.856.773 2.621 2.621 0 01-.024 3.727 2.621 2.621 0 01.024 3.727 2.61 2.61 0 01-1.854.773H7.5z"}}),_c('path',{attrs:{"d":"M6.75 23.25a.75.75 0 010-1.5h2.365l.5-3H1.75C.785 18.75 0 17.965 0 17V2.5C0 1.535.785.75 1.75.75h20.5c.965 0 1.75.785 1.75 1.75V17c0 .965-.785 1.75-1.75 1.75h-7.865l.5 3h2.365a.75.75 0 010 1.5H6.75zm6.615-1.5l-.5-3h-1.729l-.5 3h2.729zM1.75 2.25a.25.25 0 00-.25.25V17c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V2.5a.25.25 0 00-.25-.25H1.75z"}})])
          )
        }
      }
    