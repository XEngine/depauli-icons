
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
            children.concat([_c('path',{attrs:{"d":"M2.26 22.503a2.252 2.252 0 01-2.25-2.25V3.869a2.376 2.376 0 012.363-2.366h19.28a2.368 2.368 0 012.357 2.356v16.279a2.374 2.374 0 01-2.363 2.365H2.26zm-.75-2.25c0 .414.336.75.75.75h19.385a.87.87 0 00.865-.867v-6.633h-5.069a.746.746 0 00-.67.415l-1.781 3.556a1.492 1.492 0 01-1.339.827c-.648 0-1.22-.413-1.424-1.027l-1.855-5.564-1.776 3.549a2.239 2.239 0 01-2.012 1.244H1.51v3.75zm8.863-10.045c.23 0 .462.055.669.158.354.177.629.495.754.871L13.65 16.8l1.78-3.553a2.238 2.238 0 012.011-1.244h5.07v-4.5h-21v7.5h5.073a.746.746 0 00.671-.415l1.775-3.551a1.491 1.491 0 011.343-.829zM22.51 6.003V3.861a.864.864 0 00-.859-.858H18.01v3h4.5zm-6 0v-3h-3v3h3zm-4.5 0v-3H2.375a.871.871 0 00-.865.868v2.132h10.5z"}})])
          )
        }
      }
    