
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
            children.concat([_c('path',{attrs:{"d":"M2.25 23.25A2.252 2.252 0 010 21V3A2.252 2.252 0 012.25.75h19.5A2.252 2.252 0 0124 3v18a2.252 2.252 0 01-2.25 2.25H2.25zm19.5-1.5a.75.75 0 00.75-.75V3a.75.75 0 00-.75-.75H4.5v19.5h17.25zM2.25 2.25A.75.75 0 001.5 3v18c0 .414.336.75.75.75H3V2.25h-.75z"}}),_c('path',{attrs:{"d":"M9.375 18c-1.447 0-2.625-1.177-2.625-2.625s1.178-2.625 2.625-2.625c.392 0 .776.088 1.125.255V8.75c0-.97.618-1.828 1.539-2.135l4.536-1.261c.204-.069.436-.106.673-.106.346 0 .695.083 1.009.24A2.238 2.238 0 0119.5 7.5v5.625c0 1.448-1.177 2.625-2.625 2.625s-2.625-1.177-2.625-2.625a2.628 2.628 0 012.625-2.625c.392 0 .776.089 1.125.255V7.5a.752.752 0 00-.748-.75.747.747 0 00-.238.039L12.477 8.05c-.273.091-.477.382-.477.7v6.625A2.628 2.628 0 019.375 18zm0-3.75c-.62 0-1.125.505-1.125 1.125S8.755 16.5 9.375 16.5s1.125-.505 1.125-1.125-.505-1.125-1.125-1.125zm7.5-2.25c-.62 0-1.125.505-1.125 1.125s.505 1.125 1.125 1.125S18 13.745 18 13.125 17.495 12 16.875 12z"}})])
          )
        }
      }
    