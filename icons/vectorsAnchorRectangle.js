
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M1.313 24A1.314 1.314 0 010 22.687v-3.374C0 18.589.589 18 1.313 18h.937V6h-.937A1.314 1.314 0 010 4.687V1.313C0 .589.589 0 1.313 0h3.374C5.411 0 6 .589 6 1.313v.896l12 2.4v-.296C18 3.589 18.589 3 19.313 3h3.374C23.411 3 24 3.589 24 4.313v3.374C24 8.411 23.411 9 22.687 9h-.937v6h.937c.724 0 1.313.589 1.313 1.313v3.374c0 .724-.589 1.313-1.313 1.313h-3.374A1.314 1.314 0 0118 19.687v-.296l-12 2.4v.896C6 23.411 5.411 24 4.687 24H1.313zM4.5 22.5v-3h-3v3h3zm.187-4.5C5.411 18 6 18.589 6 19.313v.948l12-2.4v-1.548c0-.724.589-1.313 1.313-1.313h.937V9h-.937A1.314 1.314 0 0118 7.687V6.139l-12-2.4v.948C6 5.411 5.411 6 4.687 6H3.75v12h.937zM22.5 19.5v-3h-3v3h3zm0-12v-3h-3v3h3zm-18-3v-3h-3v3h3z"}})])
          )
        }
      }
    