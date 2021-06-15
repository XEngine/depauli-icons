
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
            children.concat([_c('path',{attrs:{"d":"M23.25 4.39h-3.91a.75.75 0 000 1.5h1.11L15.06 17l-2.36-5.82 2.56-5.3h1.14a.75.75 0 000-1.5h-3.32a.75.75 0 000 1.5h.52l-1.66 3.43-1.38-3.42h.36a.75.75 0 000-1.5H7.6a.75.75 0 000 1.5h1.34l2.12 5.24L8.21 17 3.71 5.89h1.44a.75.75 0 000-1.5H.75a.75.75 0 000 1.5H2.1l5.35 13.25a.75.75 0 00.67.47.75.75 0 00.67-.42l3-6.19 2.48 6.14a.75.75 0 00.67.47.75.75 0 00.67-.42l6.44-13.3h1.14a.75.75 0 000-1.5z"}})])
          )
        }
      }
    