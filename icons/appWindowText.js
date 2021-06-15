
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
            children.concat([_c('path',{attrs:{"d":"M2.26 22.503a2.252 2.252 0 01-2.25-2.25V3.869a2.376 2.376 0 012.363-2.366h19.28a2.368 2.368 0 012.357 2.356v16.279a2.374 2.374 0 01-2.363 2.365H2.26zm-.75-2.25c0 .414.336.75.75.75h19.385a.87.87 0 00.865-.867V7.503h-21v12.75zm21-14.25V3.861a.864.864 0 00-.859-.858H18.01v3h4.5zm-6 0v-3h-3v3h3zm-4.5 0v-3H2.375a.871.871 0 00-.865.868v2.132h10.5z"}}),_c('path',{attrs:{"d":"M6.01 11.253a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM6.01 14.253a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM6.01 17.253a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM10.51 11.253a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5zM10.51 14.253a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5zM10.51 17.253a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5z"}})])
          )
        }
      }
    