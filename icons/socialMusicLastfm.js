
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M18.19 7A3.27 3.27 0 0120 6.51c1.22 0 2.25.52 2.25 1.13a.75.75 0 001.5 0C23.75 5.92 21.86 5 20 5a4.73 4.73 0 00-2.67.76A3 3 0 0016 8.38c0 2.95 2.14 3.65 3.7 4.17s2.57.92 2.57 2.55a2.12 2.12 0 01-2.39 2.39c-3.06 0-3.88-2-5-5.35S12.58 5 7.24 5a7 7 0 105.63 11.14.75.75 0 00-1.21-.89A5.49 5.49 0 011.75 12a5.5 5.5 0 015.49-5.49c4.24 0 5.16 2.83 6.23 6.1 1 3 2.08 6.39 6.38 6.39a3.61 3.61 0 003.89-3.89c0-2.79-2-3.45-3.6-4s-2.67-1-2.67-2.74A1.57 1.57 0 0118.19 7z"}})])
          )
        }
      }
    