
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24a.748.748 0 01-.75-.75V10.5H.75c-.413 0-.75-.337-.75-.75S.337 9 .75 9h19.5V7.5H.75C.337 7.5 0 7.163 0 6.75S.337 6 .75 6h.75V1.5H.75C.337 1.5 0 1.163 0 .75S.337 0 .75 0h7.5A3.754 3.754 0 0112 3.75V6h9a.75.75 0 01.75.75v3a.75.75 0 01-.75.75H4.5v11.942a5.22 5.22 0 002.858-1.38.749.749 0 011.033-.001A5.231 5.231 0 0012 22.498c1.349 0 2.63-.51 3.609-1.437a.747.747 0 011.032.001 5.242 5.242 0 003.622 1.43c.921 0 1.824-.24 2.612-.695a.748.748 0 011.025.274.749.749 0 01-.275 1.024 6.731 6.731 0 01-3.36.895 6.786 6.786 0 01-4.139-1.4 6.756 6.756 0 01-8.25.001A6.72 6.72 0 013.759 24H3.75zM10.5 6V3.75A2.252 2.252 0 008.25 1.5H7.5V6h3zM6 6V1.5H3V6h3z"}})])
          )
        }
      }
    