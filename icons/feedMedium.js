
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
            children.concat([_c('path',{attrs:{"d":"M23.29 5L16.6 1.89a1.24 1.24 0 00-1.54.42l-4.45 6.47-2.4-3.39A.74.74 0 008 5.21v-.04L1.79 2.08A1.24 1.24 0 000 3.19v14.56a1.22 1.22 0 00.66 1.09l5.9 3.25a1.22 1.22 0 00.55.13A1.24 1.24 0 008.35 21v-5.89l13.87 7a1.24 1.24 0 00.54.13A1.24 1.24 0 0024 21V6.13A1.24 1.24 0 0023.29 5zm-7.12-1.66l6 2.8-6.3 10.07-4.34-6.12zm-9.32 17.2L1.5 17.59v-14l5.35 2.7zm1.5-12.36l5.78 8.17-5.78-2.92zm8.39 9.48l5.76-9.22v12.12z"}})])
          )
        }
      }
    