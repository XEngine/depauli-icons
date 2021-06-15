
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
            children.concat([_c('path',{attrs:{"d":"M1.11 12.47a8.14 8.14 0 00-.37 6.47.75.75 0 00.69.47.74.74 0 00.22 0L11 16.54a.75.75 0 00.44-1.09L7.83 9q.56-.16 1.17-.32c7.1-1.8 11.17 1.32 12.7 2.94l-7.37 2.26-2.47-4.28a.75.75 0 10-1.3.75l2.76 4.79a.75.75 0 00.87.34l9-2.77a.75.75 0 00.4-1.14c0-.07-4.87-6.91-15-4.35q-.82.21-1.56.47L5.55 5l-1.31.74 1.44 2.53a9.34 9.34 0 00-4.57 4.2zm5.3-2.89l3.26 5.8-7.74 2.34a6.79 6.79 0 01.52-4.58 8 8 0 013.97-3.56z"}})])
          )
        }
      }
    