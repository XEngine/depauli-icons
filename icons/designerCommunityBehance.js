
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
            children.concat([_c('path',{attrs:{"d":"M11.88 8.58A4.17 4.17 0 007.72 4.4h-7a.75.75 0 00-.72.75v13.7a.75.75 0 00.75.75h7a4.17 4.17 0 002.34-7.6 4.17 4.17 0 001.79-3.42zm-1.5 6.85a2.67 2.67 0 01-2.66 2.67H1.5v-5.35h6.22a2.67 2.67 0 012.66 2.67zm-2.66-4.18H1.5V5.9h6.22a2.67 2.67 0 010 5.35z"}}),_c('path',{attrs:{"d":"M24 14a5.64 5.64 0 10-.44 2.18.75.75 0 10-1.38-.58 4.14 4.14 0 01-7.89-.85h9A.75.75 0 0024 14zm-9.71-.75a4.14 4.14 0 018.15 0zM15.91 5.38a.75.75 0 000 1.5h4.89a.75.75 0 000-1.5z"}})])
          )
        }
      }
    