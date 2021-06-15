
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
            children.concat([_c('path',{attrs:{"d":"M15.667 24c-.76-.001-1.4-.57-1.49-1.323L12.93 12.076a.934.934 0 00-.934-.831.922.922 0 00-.579.203.93.93 0 00-.348.626L9.823 22.675A1.504 1.504 0 018.333 24H3.06a1.504 1.504 0 01-1.496-1.616L3 3.721V1.25C3 .561 3.561 0 4.25 0h15.5C20.439 0 21 .561 21 1.25v2.473l.4 5.19.001.027 1.035 13.445a1.493 1.493 0 01-.434 1.177A1.5 1.5 0 0120.94 24h-5.273zM11.996 9.744a2.426 2.426 0 012.425 2.158L15.667 22.5h5.273l-.982-12.763c-2.145-.186-3.906-2.394-4.172-5.237H12v2.25h.75a.75.75 0 010 1.5H12c-.827 0-1.5-.673-1.5-1.5V4.5H8.214c-.267 2.843-2.028 5.051-4.173 5.237L3.06 22.5h5.273L9.58 11.9a2.417 2.417 0 01.905-1.628 2.41 2.41 0 011.511-.528zM17.292 4.5c.219 1.929 1.265 3.438 2.549 3.707L19.555 4.5h-2.263zM4.159 8.207c1.283-.269 2.33-1.778 2.549-3.707H4.444l-.285 3.707zM19.5 3V1.5h-15V3h15z"}})])
          )
        }
      }
    