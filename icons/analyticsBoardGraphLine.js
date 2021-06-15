
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
            children.concat([_c('path',{attrs:{"d":"M2.25 21A2.252 2.252 0 010 18.75V5.25A2.252 2.252 0 012.25 3h19.5A2.252 2.252 0 0124 5.25v13.5A2.252 2.252 0 0121.75 21H2.25zm0-16.5a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M9.751 15.75a.751.751 0 01-.66-.392l-2.224-4.096-2.474 4.124a.755.755 0 01-1.029.257.749.749 0 01-.257-1.029l3.15-5.25a.742.742 0 01.63-.365L6.932 9a.745.745 0 01.627.391l2.371 4.367 2.29-2.29a.744.744 0 011.06 0l2.353 2.353 3.993-5.989a.753.753 0 011.36.271.743.743 0 01-.112.563l-4.5 6.75a.747.747 0 01-.625.334.755.755 0 01-.53-.22l-2.469-2.469-2.47 2.47a.747.747 0 01-.529.219z"}})])
          )
        }
      }
    