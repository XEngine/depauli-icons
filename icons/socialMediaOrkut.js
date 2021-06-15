
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
            children.concat([_c('path',{attrs:{"d":"M12 0a12 12 0 1012 12A12 12 0 0012 0zm0 22.5A10.5 10.5 0 1122.5 12 10.51 10.51 0 0112 22.5z"}}),_c('path',{attrs:{"d":"M12 3.91A8.09 8.09 0 1020.09 12 8.1 8.1 0 0012 3.91zm0 14.67A6.59 6.59 0 1118.59 12 6.59 6.59 0 0112 18.59z"}})])
          )
        }
      }
    