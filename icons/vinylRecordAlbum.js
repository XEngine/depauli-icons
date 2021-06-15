
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
            children.concat([_c('path',{attrs:{"d":"M3.375 18C1.928 18 .75 16.823.75 15.375s1.178-2.625 2.625-2.625c.392 0 .776.088 1.125.255V8.75c0-.97.619-1.828 1.539-2.135l4.536-1.261c.204-.069.437-.106.673-.106a2.262 2.262 0 012.136 1.541c.077.23.116.469.116.711v5.625a2.627 2.627 0 01-2.625 2.625 2.628 2.628 0 01-2.625-2.625 2.629 2.629 0 012.625-2.625c.392 0 .776.089 1.125.255V7.5a.752.752 0 00-.748-.751.747.747 0 00-.238.039L6.477 8.05c-.273.091-.477.382-.477.7v6.625A2.628 2.628 0 013.375 18zm0-3.75c-.62 0-1.125.505-1.125 1.125S2.755 16.5 3.375 16.5 4.5 15.995 4.5 15.375s-.505-1.125-1.125-1.125zm7.5-2.25c-.62 0-1.125.505-1.125 1.125s.505 1.125 1.125 1.125S12 13.745 12 13.125 11.495 12 10.875 12z"}}),_c('path',{attrs:{"d":"M.75 23.25a.75.75 0 010-1.5h13.5A.75.75 0 0015 21V3a.75.75 0 00-.75-.75H.75a.75.75 0 010-1.5h13.5A2.252 2.252 0 0116.5 3v1.501C20.646 4.518 24 7.875 24 12c0 4.135-3.365 7.5-7.5 7.5V21a2.252 2.252 0 01-2.25 2.25H.75zM16.532 18c3.283 0 5.968-2.692 5.968-6s-2.692-6-6-6v3c1.656.004 3 1.348 3 3 0 1.654-1.346 3-3 3v2.999l.032.001zm-.025-4.5a1.5 1.5 0 00-.005-3H16.5v3h.007z"}})])
          )
        }
      }
    