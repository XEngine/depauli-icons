
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
            children.concat([_c('path',{attrs:{"d":"M.75 17.15h4.86a.75.75 0 00.64-.36l3.9-6.41a.75.75 0 000-.75L7.24 4.3a.75.75 0 00-.66-.39H1.73A.75.75 0 001.07 5l2.72 5-3.68 6a.75.75 0 00.64 1.14zm4.54-6.77a.75.75 0 000-.75L3 5.41h3.14L8.64 10l-3.45 5.65H2.08zM18.09 0a.75.75 0 00-.65.38L9.63 14.06a.75.75 0 000 .74l5 8.82a.75.75 0 00.65.38h5.16a.75.75 0 00.65-1.12l-4.79-8.45 7.6-13.31A.75.75 0 0023.25 0zm-3.3 14.06a.75.75 0 000 .74l4.39 7.7h-3.43l-4.6-8.07L18.53 1.5H22z"}})])
          )
        }
      }
    