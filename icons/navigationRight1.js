
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
            children.concat([_c('path',{attrs:{"d":"M13.498 24c-.379 0-.741-.142-1.019-.4a1.505 1.505 0 01-.48-1.104v-2.997h-9.75a2.252 2.252 0 01-2.25-2.25v-6a6.758 6.758 0 016.75-6.75h5.25V1.5a1.49 1.49 0 01.436-1.06 1.49 1.49 0 011.06-.442c.427.006.827.181 1.104.481l8.812 10.002c.793.848.79 2.194-.014 3.054l-8.786 9.971a1.496 1.496 0 01-1.056.493l-.057.001zM1.499 17.249c0 .414.336.75.75.75h10.5a.75.75 0 01.75.75v3.749l8.787-9.971a.76.76 0 00.014-1.039l-8.784-9.969-.018 3.731a.75.75 0 01-.75.75h-5.25v3.75A2.252 2.252 0 015.248 12h-3.75v5.249zm3.75-6.75a.75.75 0 00.75-.75V6.054a5.265 5.265 0 00-4.445 4.445h3.695z"}})])
          )
        }
      }
    