
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75v-10.5a.75.75 0 01.75-.75A3.754 3.754 0 004.5 6.75V1.5C4.5.673 5.173 0 6 0h2.326a1.506 1.506 0 011.469 1.2 2.246 2.246 0 002.21 1.804c.439 0 .867-.13 1.237-.375.501-.332.843-.839.962-1.428A1.504 1.504 0 0115.673 0H18c.827 0 1.5.673 1.5 1.5v5.25a3.754 3.754 0 003.75 3.75.75.75 0 01.75.75v10.5A2.252 2.252 0 0121.75 24H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V19.5H18v.75a.75.75 0 01-1.5 0v-.75h-9v.75a.75.75 0 01-1.5 0v-.75H1.5v2.25zm21-3.75v-3H18v3h4.5zm-6 0v-3h-9v3h9zM6 18v-3H1.5v3H6zm16.5-4.5v-1.554C19.95 11.579 18 9.36 18 6.75V1.5h-2.326a3.718 3.718 0 01-1.603 2.379 3.727 3.727 0 01-2.817.549 3.743 3.743 0 01-2.929-2.929L6 1.5v5.25c0 2.61-1.95 4.829-4.5 5.196V13.5H6v-.75a.75.75 0 011.5 0v.75h9v-.75a.75.75 0 011.5 0v.75h4.5z"}})])
          )
        }
      }
    