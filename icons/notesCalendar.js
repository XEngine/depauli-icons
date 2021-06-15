
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
            children.concat([_c('path',{attrs:{"d":"M2.251 24a2.252 2.252 0 01-2.25-2.25v-18a2.252 2.252 0 012.25-2.25h3.75V.75a.75.75 0 011.5 0v.75h8.998V.75a.75.75 0 011.5 0v.75h3.751C22.99 1.5 24 2.509 24 3.75v18c0 1.241-1.01 2.25-2.25 2.25H2.251zm0-21a.75.75 0 00-.75.75v18c0 .414.336.75.75.75H21.75a.75.75 0 00.75-.75v-18a.75.75 0 00-.75-.75h-3.751v.75a.75.75 0 01-1.5 0V3H7.501v.75a.75.75 0 01-1.5 0V3h-3.75z"}}),_c('path',{attrs:{"d":"M5.251 21a.75.75 0 01-.75-.75V6.75a.75.75 0 01.75-.75H19.5a.75.75 0 01.75.75v8.379c0 .601-.235 1.166-.66 1.591l-3.619 3.622A2.242 2.242 0 0114.38 21H5.251zm8.249-1.5v-3.75a2.252 2.252 0 012.25-2.25h3v-6H6.001v12H13.5zm2.25-4.5a.75.75 0 00-.75.75v3.44l3.53-3.532a.744.744 0 00.22-.53V15h-3z"}})])
          )
        }
      }
    