
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
            children.concat([_c('path',{attrs:{"d":"M18.75 21c-.96 0-1.808-.615-2.121-1.5H7.371C7.058 20.385 6.21 21 5.25 21s-1.808-.615-2.121-1.5H2.25A2.252 2.252 0 010 17.25v-12A2.252 2.252 0 012.25 3H15a2.252 2.252 0 012.25 2.25V7.5h3A3.754 3.754 0 0124 11.25v6a2.252 2.252 0 01-2.25 2.25h-.879A2.258 2.258 0 0118.75 21zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zm-13.5 0a.75.75 0 100 1.5.75.75 0 000-1.5zm16.5 0a.75.75 0 00.75-.75V13.5H21a2.252 2.252 0 01-2.25-2.25V9h-1.5v8.076c.402-.36.931-.576 1.5-.576.96 0 1.808.615 2.121 1.5h.879zm-6 0v-3H1.5v2.25c0 .414.336.75.75.75h.879c.314-.885 1.162-1.5 2.121-1.5s1.808.615 2.121 1.5h8.379zm0-4.5V5.25A.75.75 0 0015 4.5H2.25a.75.75 0 00-.75.75v8.25h2.25V8.25a.75.75 0 011.5 0v5.25H7.5V8.25a.75.75 0 011.5 0v5.25h2.25V8.25a.75.75 0 011.5 0v5.25h3zm4.5-2.25c0 .414.336.75.75.75h1.5v-.75A2.252 2.252 0 0020.25 9v2.25z"}})])
          )
        }
      }
    