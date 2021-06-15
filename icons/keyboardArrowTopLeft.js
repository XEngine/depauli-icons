
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
            children.concat([_c('path',{attrs:{"d":"M23.25 23.997a.743.743 0 01-.53-.22L1.5 2.558v5.689a.75.75 0 01-1.5 0v-7.5C0 .658.016.571.048.486L.055.465a.76.76 0 01.41-.412L.49.044a.737.737 0 01.26-.047h7.5a.75.75 0 010 1.5H2.561l21.22 21.22a.744.744 0 010 1.06.75.75 0 01-.531.22z"}})])
          )
        }
      }
    