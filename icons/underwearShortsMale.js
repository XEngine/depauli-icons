
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
            children.concat([_c('path',{attrs:{"d":"M15.421 24a2.246 2.246 0 01-2.183-1.704L12 17.816l-1.243 4.498A2.238 2.238 0 018.579 24H2.25A2.252 2.252 0 010 21.75V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v19.5A2.252 2.252 0 0121.75 24h-6.329zm-.733-2.086a.758.758 0 00.732.586h6.33a.75.75 0 00.75-.75v-15h-6.75v4.5a3.768 3.768 0 01-1.5 3l-1.391 1.043 1.829 6.621zM1.5 21.75c0 .414.336.75.75.75h6.329a.75.75 0 00.728-.568l1.834-6.639L9.75 14.25a3.768 3.768 0 01-1.5-3v-4.5H1.5v15zm8.25-10.5c0 .705.336 1.377.9 1.8L12 14.062l1.35-1.013a2.26 2.26 0 00.9-1.8v-4.5h-4.5v4.501zm12.75-6v-3a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v3h21z"}})])
          )
        }
      }
    