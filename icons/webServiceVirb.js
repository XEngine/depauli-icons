
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
            children.concat([_c('path',{attrs:{"d":"M16.71 4.4h-4.62a.75.75 0 00-.7.49l-2.57 6.93-2.61-6.93a.75.75 0 00-.7-.49H.75a.75.75 0 00-.69 1l5.56 13.7a.75.75 0 00.69.47h4.93a.75.75 0 00.7-.47l5.47-13.7a.75.75 0 00-.7-1zm-6 13.7H6.82l-5-12.2H5l3.13 8.32a.75.75 0 00.7.49.75.75 0 00.7-.49l3.08-8.32h3zM20.8 4.4A3.2 3.2 0 1024 7.6a3.2 3.2 0 00-3.2-3.2zm0 4.89a1.7 1.7 0 111.7-1.7 1.7 1.7 0 01-1.7 1.7z"}})])
          )
        }
      }
    