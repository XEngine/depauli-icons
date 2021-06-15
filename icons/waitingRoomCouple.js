
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
            children.concat([_c('path',{attrs:{"d":"M10.502 10.499c-1.861 0-3.375-1.514-3.375-3.375s1.514-3.375 3.375-3.375 3.375 1.514 3.375 3.375-1.514 3.375-3.375 3.375zm0-5.25c-1.034 0-1.875.841-1.875 1.875s.841 1.875 1.875 1.875 1.875-.841 1.875-1.875-.841-1.875-1.875-1.875zM18.002 10.499c-1.861 0-3.375-1.514-3.375-3.375s1.514-3.375 3.375-3.375 3.375 1.514 3.375 3.375-1.514 3.375-3.375 3.375zm0-5.25c-1.034 0-1.875.841-1.875 1.875s.841 1.875 1.875 1.875 1.875-.841 1.875-1.875-.841-1.875-1.875-1.875zM21.751 23.999a2.252 2.252 0 01-2.25-2.25v-2.25h-2.25a2.252 2.252 0 01-2.25-2.25v-4.125c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v1.875h.75a3.754 3.754 0 013.75 3.75v3c0 1.241-1.01 2.25-2.25 2.25zm-4.5-11.625a.75.75 0 00-.75.75v4.125c0 .414.336.75.75.75h3a.75.75 0 01.75.75v3a.75.75 0 001.5 0v-3a2.252 2.252 0 00-2.25-2.25h-1.5a.75.75 0 01-.75-.75v-2.625a.75.75 0 00-.75-.75zM2.24 24.009c-.351 0-.703-.085-1.017-.245a2.254 2.254 0 01-.983-3.027l2.247-4.495A2.24 2.24 0 014.5 14.998h4.501v-1.875a2.252 2.252 0 012.25-2.25 2.253 2.253 0 012.249 2.25v4.125a2.252 2.252 0 01-2.25 2.25h-.75v2.25c0 1.241-1.009 2.25-2.25 2.25S6 22.989 6 21.748v-2.25h-.108l-1.635 3.268.005-.012-.012.026a2.244 2.244 0 01-2.008 1.228H2.24zm2.261-7.51a.746.746 0 00-.671.415l-2.25 4.5a.752.752 0 00.664 1.095.747.747 0 00.67-.409l1.845-3.687a.746.746 0 01.671-.415h1.322a.75.75 0 01.75.75v3a.75.75 0 001.5 0v-3a.75.75 0 01.75-.75h1.5a.75.75 0 00.75-.75v-4.125a.75.75 0 00-1.499 0v2.625a.75.75 0 01-.75.75H4.501zM5.25 10.499c-1.402-.002-2.72-.549-3.711-1.542S.004 6.646.006 5.243a5.219 5.219 0 011.542-3.711A5.216 5.216 0 015.256-.002a5.276 5.276 0 012.619.701A.75.75 0 017.127 2a3.746 3.746 0 00-1.867-.5 3.729 3.729 0 00-2.653 1.095c-.709.708-1.1 1.649-1.101 2.65s.388 1.944 1.095 2.653a3.726 3.726 0 002.65 1.101c.2 0 .389.078.53.22a.752.752 0 01-.531 1.28c.001 0 0 0 0 0z"}}),_c('path',{attrs:{"d":"M3.751 5.999a.75.75 0 010-1.5h.75v-.75a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75h-1.5z"}})])
          )
        }
      }
    