
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
            children.concat([_c('path',{attrs:{"d":"M19.81 3.25H4.19A4.19 4.19 0 000 7.44v9.12a4.19 4.19 0 004.19 4.19h15.62A4.19 4.19 0 0024 16.56V7.44a4.19 4.19 0 00-4.19-4.19zm2.69 13.31a2.69 2.69 0 01-2.69 2.69H4.19a2.69 2.69 0 01-2.69-2.69V7.44a2.69 2.69 0 012.69-2.69h15.62a2.69 2.69 0 012.69 2.69z"}}),_c('path',{attrs:{"d":"M9.9 6.65a.75.75 0 00-1.15.63v8.66a.75.75 0 001.15.63l6.77-4.33a.75.75 0 000-1.26zm.35 7.92V8.65l4.63 3z"}})])
          )
        }
      }
    