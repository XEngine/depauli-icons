
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
            children.concat([_c('path',{attrs:{"d":"M2.56 21a2.252 2.252 0 01-2.25-2.25V5.25A2.252 2.252 0 012.56 3h12.128c.601 0 1.166.234 1.591.658l7.28 7.281a1.5 1.5 0 01.001 2.119l-7.281 7.282a2.23 2.23 0 01-1.59.66H2.56zm0-16.5a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h12.128a.748.748 0 00.531-.219L22.499 12l-7.28-7.281a.748.748 0 00-.53-.219H2.56z"}})])
          )
        }
      }
    