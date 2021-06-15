
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
            children.concat([_c('path',{attrs:{"d":"M13 7.44a.75.75 0 000 1.5 2.73 2.73 0 012.72 2.72.75.75 0 001.5 0A4.23 4.23 0 0013 7.44z"}}),_c('path',{attrs:{"d":"M22.27 5.27H16.4a8.49 8.49 0 00-8.8 0H6.39V3.56a.75.75 0 00-.75-.75H2.23a.75.75 0 00-.75.75v1.73A1.73 1.73 0 000 7v11.23A1.73 1.73 0 001.73 20H7.6a8.49 8.49 0 008.8 0h5.87A1.73 1.73 0 0024 18.23V7a1.73 1.73 0 00-1.73-1.73zM3 4.31h1.89v1H3zM1.5 18.23V7a.23.23 0 01.23-.23h4a8.53 8.53 0 000 11.7h-4a.23.23 0 01-.23-.24zm3.42-5.62A7.08 7.08 0 1112 19.69a7.08 7.08 0 01-7.08-7.08zm17.58 5.62a.23.23 0 01-.23.23h-4a8.53 8.53 0 000-11.7h4a.23.23 0 01.23.24z"}})])
          )
        }
      }
    