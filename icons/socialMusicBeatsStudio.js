
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
            children.concat([_c('path',{attrs:{"d":"M15.24 12A3.25 3.25 0 1012 15.25 3.25 3.25 0 0015.24 12zm-5 0A1.75 1.75 0 1112 13.75 1.75 1.75 0 0110.24 12z"}}),_c('path',{attrs:{"d":"M12 24a12 12 0 000-24 12.37 12.37 0 00-2.74.31.75.75 0 00-.58.69v6a.75.75 0 001.08.67A5.05 5.05 0 0112 7.13a4.87 4.87 0 010 9.75A4.65 4.65 0 017.36 12V2.26a.75.75 0 00-1.13-.65A12.19 12.19 0 000 12a12 12 0 0012 12zM5.86 3.65V12A6.19 6.19 0 0012 18.37a6.37 6.37 0 000-12.74 6.47 6.47 0 00-1.81.26V1.65A10.82 10.82 0 0112 1.5 10.5 10.5 0 111.5 12a10.54 10.54 0 014.36-8.35z"}})])
          )
        }
      }
    