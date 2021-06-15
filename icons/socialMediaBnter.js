
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
            children.concat([_c('circle',{attrs:{"cx":"19.77","cy":"12.04","r":"1.25"}}),_c('path',{attrs:{"d":"M21.44 2.69H2.56A2.57 2.57 0 000 5.25v11.38a2.57 2.57 0 002.56 2.57h.11a2.68 2.68 0 01-.34 1A.75.75 0 003 21.31a4.13 4.13 0 003.43-2.12h15A2.57 2.57 0 0024 16.63V5.25a2.57 2.57 0 00-2.56-2.56zm1.06 13.94a1.06 1.06 0 01-1.06 1.07H5.91a.75.75 0 00-.73.57 1.86 1.86 0 01-1 1.22 4.07 4.07 0 000-1.14.75.75 0 00-.74-.65h-.88a1.06 1.06 0 01-1.06-1.07V5.25a1.06 1.06 0 011.06-1.06h18.88a1.06 1.06 0 011.06 1.06z"}}),_c('circle',{attrs:{"cx":"4.32","cy":"12.04","r":"1.25"}}),_c('path',{attrs:{"d":"M14.31 13.54a.74.74 0 00-.6-.14l-2.7.55a.75.75 0 00-.56 1 2.13 2.13 0 004.16-.67v-.16a.75.75 0 00-.3-.58z"}})])
          )
        }
      }
    