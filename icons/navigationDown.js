
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
            children.concat([_c('path',{attrs:{"d":"M12.002 23.997a2.248 2.248 0 01-1.538-.604l-9.97-8.788a1.504 1.504 0 01-.493-1.056A1.49 1.49 0 01.4 12.473c.283-.305.684-.48 1.1-.48h3.001V2.245a2.252 2.252 0 012.25-2.25h6a6.758 6.758 0 016.75 6.75v5.25H22.5a1.502 1.502 0 011.021 2.601l-10.002 8.812a2.22 2.22 0 01-1.517.589zM1.5 13.493l9.972 8.789c.151.14.337.214.531.214.19 0 .371-.071.509-.199l10.004-8.814-3.764.013a.75.75 0 01-.75-.75v-5.25h-3.75a2.252 2.252 0 01-2.25-2.25v-3.75h-5.25a.75.75 0 00-.75.75v10.498a.75.75 0 01-.75.75L1.5 13.493zm12.001-8.248c0 .414.336.75.75.75h3.695a5.265 5.265 0 00-4.445-4.445v3.695z"}})])
          )
        }
      }
    