
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
            children.concat([_c('path',{attrs:{"d":"M5.5 23.997a.751.751 0 01-.689-1.046l4.052-9.454H5.9c-.402 0-.776-.155-1.059-.435a1.492 1.492 0 01-.319-1.661L9.113.9c.238-.547.778-.9 1.374-.9h7.7c.401 0 .778.156 1.061.44.283.284.439.661.439 1.061 0 .339-.117.672-.33.938L15.307 7.5h3.383a1.502 1.502 0 011.059 2.562L6.03 23.777a.743.743 0 01-.53.22zm3.363-12a1.503 1.503 0 011.379 2.091l-2.519 5.877L18.69 9h-3.382a1.502 1.502 0 01-1.172-2.436L18.187 1.5h-7.699L5.897 12l2.966-.003z"}})])
          )
        }
      }
    