
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
            children.concat([_c('path',{attrs:{"d":"M17.28 0A6.37 6.37 0 0012 3.48 6.37 6.37 0 006.72 0a5 5 0 00-4.64 2.87c-1.92 3.48.95 7.31 4 11.36 2.22 3 4.51 6 5.2 9.13a.75.75 0 001.46 0c.69-3.13 3-6.18 5.2-9.13 3-4.05 5.91-7.88 4-11.32A5 5 0 0017.28 0zm-.55 13.29A37 37 0 0012 20.78a37 37 0 00-4.73-7.45c-2.86-3.81-5.33-7.1-3.85-9.78a3.56 3.56 0 013.23-2c1.86 0 3.54 1.44 4.61 3.87a.78.78 0 001.37 0C13.75 3 15.44 1.57 17.3 1.54a3.58 3.58 0 013.3 2.06c1.46 2.63-1.01 5.92-3.87 9.74z"}})])
          )
        }
      }
    