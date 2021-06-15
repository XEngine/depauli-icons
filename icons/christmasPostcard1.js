
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
            children.concat([_c('path',{attrs:{"d":"M3 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 013 0h18a2.252 2.252 0 012.25 2.25v19.5A2.252 2.252 0 0121 24H3zM3 1.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V2.25A.75.75 0 0021 1.5H3z"}}),_c('path',{attrs:{"d":"M12 21a.75.75 0 01-.75-.75V18H8.364a2.252 2.252 0 01-2.035-3.208l4.993-10.611a.75.75 0 011.356-.001l4.993 10.611a2.252 2.252 0 01-2.036 3.208H12.75v2.25A.75.75 0 0112 21zm3.636-4.5a.75.75 0 00.679-1.069L12 6.261 7.686 15.43a.745.745 0 00-.027.573.744.744 0 00.705.497h2.886v-3a.75.75 0 011.5 0v3h2.886z"}})])
          )
        }
      }
    