
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
            children.concat([_c('path',{attrs:{"d":"M12 24A12 12 0 100 12a12 12 0 0012 12zm0-22.5A10.5 10.5 0 111.49 12 10.51 10.51 0 0112 1.5z"}}),_c('path',{attrs:{"d":"M7.33 8.53a9.28 9.28 0 015.2-.63 9.27 9.27 0 014.84 2.05.75.75 0 101-1.11 10.79 10.79 0 00-5.64-2.43 10.82 10.82 0 00-6.07.77.75.75 0 10.66 1.35zM6.85 12.4a9.38 9.38 0 015.15-.6 9.38 9.38 0 014.76 2 .75.75 0 101-1.13 10.75 10.75 0 00-5.54-2.34 10.72 10.72 0 00-6 .73.75.75 0 10.64 1.36zM6.32 16.27a9.38 9.38 0 015.12-.59 9.36 9.36 0 014.77 2 .75.75 0 101-1.13 10.73 10.73 0 00-5.55-2.35 10.74 10.74 0 00-6 .72.75.75 0 00.63 1.36z"}})])
          )
        }
      }
    