
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
            children.concat([_c('path',{attrs:{"d":"M.4 5.47a.75.75 0 00-.4.66v11.74a.75.75 0 001.17.62L10 12.62a.75.75 0 000-1.25L1.17 5.51a.75.75 0 00-.77-.04zm1.1 2.06L8.2 12l-6.7 4.47z"}}),_c('path',{attrs:{"d":"M13.51 17.75a5.76 5.76 0 01-4.26-1.89.75.75 0 00-1.11 1 7.25 7.25 0 100-9.73.75.75 0 001.11 1 5.75 5.75 0 114.26 9.61z"}}),_c('path',{attrs:{"d":"M13.47 1.47A10.49 10.49 0 005.26 5.4a.75.75 0 001.17.94 9 9 0 11-.17 11.09.75.75 0 10-1.2.9 10.53 10.53 0 108.41-16.86z"}})])
          )
        }
      }
    