
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
            children.concat([_c('path',{attrs:{"d":"M2.85 13.71a.75.75 0 00-.75.75V21a2.75 2.75 0 002.75 2.75h11A2.75 2.75 0 0018.6 21v-6.5a.75.75 0 00-1.5 0V21a1.25 1.25 0 01-1.25 1.25h-11A1.25 1.25 0 013.6 21v-6.5a.75.75 0 00-.75-.79z"}}),_c('path',{attrs:{"d":"M5.5 19a.75.75 0 00.75.75h8a.75.75 0 100-1.5h-8a.75.75 0 00-.75.75zM6.07 14.46a.75.75 0 00.58.89L14.48 17h.16a.75.75 0 00.15-1.48L7 13.88a.74.74 0 00-.93.58zM7.57 10.17a.75.75 0 00.38 1l7.31 3.25a.75.75 0 10.61-1.42L8.56 9.79a.75.75 0 00-.99.38zM9.93 6.29a.75.75 0 00.17 1L16.57 12a.75.75 0 10.88-1.21L11 6.12a.75.75 0 00-1.07.17zM13 3a.75.75 0 000 1l5.34 6a.75.75 0 101.11-1L14.1 3A.75.75 0 0013 3zM21.16 8.71a.74.74 0 00.38-.1.75.75 0 00.27-1l-4-6.92a.75.75 0 00-1.3.75l4 6.92a.75.75 0 00.65.35z"}})])
          )
        }
      }
    