
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
            children.concat([_c('path',{attrs:{"d":"M22.41 2.14a.75.75 0 00-.66-.39h-4.3a.75.75 0 00-.63.34L12 9.42 7.18 2.09a.75.75 0 00-.63-.34h-4.3a.75.75 0 00-.63 1.15l6 9.37-6 8.81a.75.75 0 00.62 1.17h4.3a.75.75 0 00.61-.32L12 15l4.84 6.89a.75.75 0 00.61.32h4.3a.75.75 0 00.62-1.17l-6-8.92 6-9.26a.75.75 0 00.04-.72zm-7.53 9.63a.75.75 0 000 .82l5.46 8.16h-2.5l-5.23-7.44a.78.78 0 00-1.23 0l-5.22 7.44h-2.5l5.45-8a.75.75 0 000-.82L3.62 3.25h2.53l5.23 7.95a.78.78 0 001.25 0l5.23-7.95h2.52z"}})])
          )
        }
      }
    