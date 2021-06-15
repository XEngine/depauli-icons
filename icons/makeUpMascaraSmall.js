
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
            children.concat([_c('path',{attrs:{"d":"M2.75 24A2.754 2.754 0 010 21.25v-8C0 12.561.561 12 1.25 12H4.5V9h-.75a.75.75 0 010-1.5h.75V6H2.25a.75.75 0 010-1.5H4.5V3h-.75a.75.75 0 010-1.5h.75V.75a.75.75 0 011.5 0v.75h.75a.75.75 0 010 1.5H6v1.5h2.25a.75.75 0 010 1.5H6v1.5h.75a.75.75 0 010 1.5H6v3h3.25c.689 0 1.25.561 1.25 1.25v8A2.754 2.754 0 017.75 24h-5zM1.5 21.25c0 .689.561 1.25 1.25 1.25h5c.689 0 1.25-.561 1.25-1.25V13.5H1.5v7.75zM16.25 12.001c-.689 0-1.25-.561-1.25-1.25v-8a2.754 2.754 0 012.75-2.75h3.5A2.754 2.754 0 0124 2.751v8c0 .689-.561 1.25-1.25 1.25h-6.5zm6.25-1.5V9h-6v1.501h6zm0-3.001V2.751c0-.689-.561-1.25-1.25-1.25h-3.5c-.689 0-1.25.561-1.25 1.25V7.5h6z"}})])
          )
        }
      }
    