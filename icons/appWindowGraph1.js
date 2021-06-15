
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
            children.concat([_c('path',{attrs:{"d":"M3.01 22.503a2.252 2.252 0 01-2.25-2.25v-16.5a2.252 2.252 0 012.25-2.25h18a2.252 2.252 0 012.25 2.25v16.5a2.252 2.252 0 01-2.25 2.25h-18zm-.75-2.25c0 .414.336.75.75.75h18a.75.75 0 00.75-.75v-6.75h-4.319a.746.746 0 00-.67.415l-1.781 3.556a1.492 1.492 0 01-1.339.827c-.648 0-1.22-.413-1.424-1.027l-1.855-5.564-1.776 3.549a2.239 2.239 0 01-2.012 1.244H2.26v3.75zm8.113-10.045c.23 0 .462.055.669.158.354.177.629.495.754.871L13.65 16.8l1.78-3.553a2.238 2.238 0 012.011-1.244h4.32v-4.5H2.26v7.5h4.323a.746.746 0 00.671-.415l1.775-3.551c.256-.511.77-.829 1.344-.829zM21.76 6.003v-2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.25h19.5z"}})])
          )
        }
      }
    