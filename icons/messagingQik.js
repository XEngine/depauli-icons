
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
            children.concat([_c('path',{attrs:{"d":"M11.82.43A11.57 11.57 0 1017 22.34a4.32 4.32 0 003 1.23 4.37 4.37 0 003.22-1.42 1.78 1.78 0 00-.66-2.86 2.87 2.87 0 01-1.18-.87 11.57 11.57 0 00-9.62-18zm8.06 18.36a4.37 4.37 0 002.19 1.9.28.28 0 01.11.45 2.86 2.86 0 01-4.39-.2.75.75 0 00-1-.2A10.08 10.08 0 1119.93 18a.75.75 0 00-.05.79z"}}),_c('path',{attrs:{"d":"M11.82 5.58A6.42 6.42 0 1018.24 12a6.43 6.43 0 00-6.42-6.42zm0 11.34A4.92 4.92 0 1116.74 12a4.92 4.92 0 01-4.92 4.92z"}}),_c('path',{attrs:{"d":"M11.82 8.67A3.33 3.33 0 008.5 12a.75.75 0 001.5 0 1.83 1.83 0 011.83-1.83.75.75 0 100-1.5z"}})])
          )
        }
      }
    