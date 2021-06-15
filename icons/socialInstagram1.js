
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
            children.concat([_c('path',{attrs:{"d":"M6.74 24h10.5A6.76 6.76 0 0024 17.25V6.75A6.76 6.76 0 0017.24 0H6.74A6.76 6.76 0 000 6.75v10.5A6.76 6.76 0 006.74 24zM4.86 1.86v2.93a.75.75 0 001.5 0V1.54H7.52v3.25a.75.75 0 001.5 0V1.5h1.16v3.29a.75.75 0 001.5 0V1.5h5.57a5.26 5.26 0 015.25 5.25v3h-5.28a6.11 6.11 0 00-10.44 0H1.49v-3a5.25 5.25 0 013.37-4.89zM12 8.35A4.63 4.63 0 117.36 13 4.64 4.64 0 0112 8.35zM1.49 11.28h4.62a6.13 6.13 0 1011.77 0h4.61v6a5.26 5.26 0 01-5.25 5.25H6.74a5.26 5.26 0 01-5.25-5.25z"}}),_c('path',{attrs:{"d":"M12 16.23A3.25 3.25 0 108.74 13 3.25 3.25 0 0012 16.23zm0-5A1.75 1.75 0 1110.24 13 1.75 1.75 0 0112 11.23zM18.24 7.5h.5a1.75 1.75 0 001.75-1.75v-.5a1.75 1.75 0 00-1.75-1.75h-.5a1.75 1.75 0 00-1.75 1.75v.5a1.75 1.75 0 001.75 1.75zM18 5.25a.25.25 0 01.24-.25h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5a.25.25 0 01-.24-.25z"}})])
          )
        }
      }
    