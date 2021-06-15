
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
            children.concat([_c('path',{attrs:{"d":"M3 23.999c-.6 0-1.165-.235-1.59-.66a2.236 2.236 0 01-.659-1.59c0-.326.073-.655.211-.95L7.519 6.591a.745.745 0 01.137-.298L9.96 1.301a2.258 2.258 0 012.041-1.302 2.252 2.252 0 012.037 1.298L23.04 20.8a2.253 2.253 0 01-2.041 3.199H3zm18-1.5a.75.75 0 00.68-1.067l-4.354-9.433H6.674l-4.353 9.43a.744.744 0 00.148.85c.142.142.33.22.53.22h3.986l2.973-7.691.028-.065a2.265 2.265 0 011.008-1.008 2.23 2.23 0 011.718-.121 2.238 2.238 0 011.327 1.19l2.974 7.695H21zm-5.594 0l-2.656-6.872v6.872h2.656zm-4.156 0v-6.873l-2.656 6.873h2.656zm5.383-12l-1.385-3H8.751l-1.385 3h9.267zm-2.077-4.5l-1.878-4.07a.752.752 0 00-.934-.384.745.745 0 00-.424.388L9.444 5.999h5.112z"}})])
          )
        }
      }
    