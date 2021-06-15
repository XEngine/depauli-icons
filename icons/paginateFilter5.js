
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
            children.concat([_c('path',{attrs:{"d":"M5.25 20.996A2.252 2.252 0 013 18.746v-16.5a2.252 2.252 0 012.25-2.25h16.5A2.252 2.252 0 0124 2.246v16.5a2.252 2.252 0 01-2.25 2.25H5.25zm0-19.5a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75v-16.5a.75.75 0 00-.75-.75H5.25z"}}),_c('path',{attrs:{"d":"M2.25 23.996A2.252 2.252 0 010 21.746v-18a.75.75 0 011.5 0v18c0 .414.336.75.75.75h18a.75.75 0 010 1.5h-18z"}}),_c('path',{attrs:{"d":"M11.25 14.996a.75.75 0 010-1.5h2.625c.62 0 1.125-.505 1.125-1.125 0-.898-.277-1.009-1.569-1.128-1.096-.102-2.931-.272-2.931-2.622V6.746a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5H12v1.125c0 .898.277 1.009 1.569 1.128 1.096.102 2.931.272 2.931 2.622a2.627 2.627 0 01-2.625 2.625H11.25z"}})])
          )
        }
      }
    