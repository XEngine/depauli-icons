
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
            children.concat([_c('path',{attrs:{"d":"M12 19.09c2.69 0 4.87-1.79 4.87-4s-2.19-4-4.87-4-4.87 1.79-4.87 4 2.18 4 4.87 4zm0-6.5c1.86 0 3.37 1.12 3.37 2.5s-1.51 2.5-3.37 2.5-3.37-1.12-3.37-2.5 1.51-2.5 3.37-2.5z"}}),_c('path',{attrs:{"d":"M3.5 1.46a.75.75 0 00-.75.75v12.88c0 4.11 4.15 7.45 9.25 7.45s9.25-3.34 9.25-7.45S17.1 7.64 12 7.64A10 10 0 004.25 11V2.21a.75.75 0 00-.75-.75zM12 9.14c4.27 0 7.75 2.67 7.75 5.95S16.27 21 12 21s-7.75-2.67-7.75-5.95S7.73 9.14 12 9.14z"}})])
          )
        }
      }
    