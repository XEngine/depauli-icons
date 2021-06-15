
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M19.65 9.71a4.43 4.43 0 00-3.6 1.8 4.43 4.43 0 00-3.6-1.8 4.35 4.35 0 00-4.06 2.66 4.32 4.32 0 00-6.46-2.53l.34-2.24h6a.75.75 0 000-1.5H1.63a.75.75 0 00-.74.64L0 12.3a.75.75 0 101.47.34A2.85 2.85 0 114.2 16.4a2.84 2.84 0 01-2.56-1.6.75.75 0 10-1.35.66 4.34 4.34 0 008-.48 4.32 4.32 0 004.15 2.91A4.43 4.43 0 0016 16.1a4.43 4.43 0 003.6 1.8 4.24 4.24 0 004.4-4.1 4.24 4.24 0 00-4.35-4.09zm-7.21 6.69a2.74 2.74 0 01-2.85-2.6 2.74 2.74 0 012.85-2.6 2.74 2.74 0 012.85 2.6 2.74 2.74 0 01-2.85 2.6zm7.21 0a2.74 2.74 0 01-2.85-2.6 2.74 2.74 0 012.85-2.6 2.74 2.74 0 012.85 2.6 2.74 2.74 0 01-2.85 2.6z"}})])
          )
        }
      }
    