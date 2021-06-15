
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
            children.concat([_c('path',{attrs:{"d":"M1.51 19.9c.89 1.53 2.77 3.35 6.66 3.35 13.27 0 15.4-14.52 15.42-14.66a.75.75 0 00-.74-.85h-20a.75.75 0 00-.65.38c-1.78 3.19-2.65 8.4-.69 11.78zM3.34 9.24h18.6c-.66 2.95-3.59 12.51-13.77 12.51-2.55 0-4.36-.88-5.36-2.61-1.55-2.66-.96-7.02.53-9.9zM14.2 3c0 1.28 1.37 2.29 3.12 2.29s3.12-1 3.12-2.29S19.07.75 17.32.75 14.2 1.76 14.2 3zm4.74 0c0 .31-.65.79-1.62.79S15.7 3.35 15.7 3s.65-.79 1.62-.79 1.62.52 1.62.79zM3.23 3c0 1.28 1.37 2.29 3.12 2.29S9.47 4.32 9.47 3 8.1.75 6.35.75 3.23 1.76 3.23 3zM8 3c0 .31-.65.79-1.62.79S4.73 3.35 4.73 3s.65-.79 1.62-.79S8 2.73 8 3z"}})])
          )
        }
      }
    