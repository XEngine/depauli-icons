
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
            children.concat([_c('path',{attrs:{"d":"M11.249 24a2.252 2.252 0 01-2.25-2.25V15h-2.25a2.252 2.252 0 01-2.25-2.25v-1.5A2.252 2.252 0 016.749 9h2.25V7.772A9.81 9.81 0 012.559.945.75.75 0 114.01.568 8.22 8.22 0 009.067 6.21a2.264 2.264 0 012.182-1.71h1.5c1.046 0 1.938.731 2.182 1.71A8.22 8.22 0 0019.99.562a.75.75 0 111.453.377A9.811 9.811 0 0115 7.773V9h2.25a2.252 2.252 0 012.25 2.25v1.5A2.252 2.252 0 0117.25 15H15v6.75A2.252 2.252 0 0112.75 24h-1.501zm-4.5-13.5a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75h3a.75.75 0 01.75.75v7.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-7.5a.75.75 0 01.75-.75h3a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75h-3a.75.75 0 01-.75-.75v-3a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v3a.75.75 0 01-.75.75h-3z"}})])
          )
        }
      }
    