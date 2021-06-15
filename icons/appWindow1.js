
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
            children.concat([_c('path',{attrs:{"d":"M2.375 22.503A2.374 2.374 0 01.01 20.14V3.861a2.367 2.367 0 012.355-2.358h19.28a2.376 2.376 0 012.365 2.364v16.386a2.252 2.252 0 01-2.25 2.25H2.375zm-.865-2.365a.87.87 0 00.867.865H21.76a.75.75 0 00.75-.75V7.503h-21v12.635zm21-14.135V3.869a.871.871 0 00-.867-.866H12.01v3h10.5zm-12 0v-3h-3v3h3zm-4.5 0v-3H2.367a.864.864 0 00-.857.86v2.14h4.5z"}})])
          )
        }
      }
    