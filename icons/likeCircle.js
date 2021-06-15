
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M5.8 18a.75.75 0 010-1.5h.95v-6H5.8a.75.75 0 010-1.5h1.7a.75.75 0 01.75.75v.332a3.544 3.544 0 002.878-3.441v-.869a2.07 2.07 0 012.005-2.026l.062-.001c.527 0 1.029.201 1.413.565.4.378.629.89.644 1.441v1.944c0 .042.034.082.081.093l.837.178a3.318 3.318 0 012.578 3.364l-.179 2.903c-.251 2.156-2.05 3.766-4.188 3.766h-2.893c-.393 0-.784-.053-1.162-.158l-2.076-.577A.751.751 0 017.5 18H5.8zm2.45-2.276c.121.023.241.051.36.083l2.12.588c.248.069.503.104.76.104h2.888a2.716 2.716 0 002.699-2.399l.175-2.846a1.805 1.805 0 00-1.405-1.823l-.837-.178a1.605 1.605 0 01-1.257-1.55v-1.93a.552.552 0 00-.176-.373.55.55 0 00-.389-.154V4.87l-.015.375a.562.562 0 00-.545.547v.859c-.038 2.509-1.934 4.618-4.378 4.952v4.121z"}})])
          )
        }
      }
    