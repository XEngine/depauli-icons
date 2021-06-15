
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
            children.concat([_c('path',{attrs:{"d":"M5.27 24a1.28 1.28 0 001.07-.6l5.24-9.18h4.17a1.72 1.72 0 001.68-1.34l2.49-10.76A1.73 1.73 0 0018.23 0H5.77A1.73 1.73 0 004 1.73v21a1.25 1.25 0 00.89 1.19 1.22 1.22 0 00.38.08zm.27-22.27a.23.23 0 01.23-.23h12.46a.23.23 0 01.22.28l-1.16 5.07h-4.68a.75.75 0 000 1.5h4.32l-1 4.19a.23.23 0 01-.22.18h-4.6a.75.75 0 00-.65.38l-5 8.68z"}})])
          )
        }
      }
    