
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
            children.concat([_c('path',{attrs:{"d":"M5.25 20.996A2.252 2.252 0 013 18.746v-16.5a2.252 2.252 0 012.25-2.25h16.5A2.252 2.252 0 0124 2.246v16.5a2.252 2.252 0 01-2.25 2.25H5.25zm0-19.5a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75v-16.5a.75.75 0 00-.75-.75H5.25z"}}),_c('path',{attrs:{"d":"M2.25 23.996A2.252 2.252 0 010 21.746v-18a.75.75 0 011.5 0v18c0 .414.336.75.75.75h18a.75.75 0 010 1.5h-18z"}}),_c('path',{attrs:{"d":"M9.75 16.496a2.252 2.252 0 01-2.25-2.25v-6a2.252 2.252 0 012.25-2.25h7.5a2.252 2.252 0 012.25 2.25v6a2.252 2.252 0 01-2.25 2.25h-7.5zM9 14.246c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75v-4.65l-3.309 2.059a2.243 2.243 0 01-1.191.339 2.25 2.25 0 01-1.193-.34L9 9.596v4.65zm4.102-3.864a.751.751 0 00.796 0l4.011-2.497a.75.75 0 00-.659-.39h-7.5a.751.751 0 00-.659.39l4.011 2.497z"}})])
          )
        }
      }
    