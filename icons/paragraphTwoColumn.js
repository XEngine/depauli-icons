
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
            children.concat([_c('path',{attrs:{"d":"M2.25 23.998A2.252 2.252 0 010 21.748v-19.5a2.252 2.252 0 012.25-2.25h19.5A2.252 2.252 0 0124 2.248v19.5a2.252 2.252 0 01-2.25 2.25H2.25zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-19.5a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M14.25 5.998a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM14.25 10.498a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM14.25 19.498a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM6.75 5.998a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM5.25 10.498a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM14.25 14.998a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM5.25 14.998a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM5.25 19.498a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z"}})])
          )
        }
      }
    