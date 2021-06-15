
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
            children.concat([_c('path',{attrs:{"d":"M1.502 24a.75.75 0 010-1.5h3.75V.75a.75.75 0 011.5 0V4.5h7.5v-3h-.75a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-.75v6.385a6.796 6.796 0 014.285 4.676 6.701 6.701 0 01-.721 5.115 6.705 6.705 0 01-4.127 3.107 6.732 6.732 0 01-5.115-.721 6.705 6.705 0 01-3.107-4.127 6.737 6.737 0 014.286-8.052V6h-7.5v16.5h3.75a.75.75 0 11-.001 1.5h-9zm14.25-15.561a.75.75 0 01-.562.726 5.256 5.256 0 00-3.771 6.396 5.216 5.216 0 002.417 3.21 5.234 5.234 0 003.979.561 5.216 5.216 0 003.21-2.417 5.253 5.253 0 00-3.21-7.75.75.75 0 01-.562-.726V1.5h-1.5v6.939z"}})])
          )
        }
      }
    