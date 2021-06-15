
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
            children.concat([_c('path',{attrs:{"d":"M11.246 24a.743.743 0 01-.53-.22.745.745 0 01-.205-.677l.75-3.75a.748.748 0 01.205-.384l7.631-7.63a2.844 2.844 0 012.026-.839 2.873 2.873 0 012.03 4.899l-7.627 7.629a.74.74 0 01-.384.205l-3.749.75a.615.615 0 01-.147.017zm.956-1.706l2.424-.485 7.467-7.469a1.368 1.368 0 00-.027-1.962 1.33 1.33 0 00-.941-.379c-.366 0-.71.142-.968.401l-7.471 7.47-.484 2.424zM2.242 21a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 012.242 0h15a2.252 2.252 0 012.25 2.25V9a.75.75 0 01-1.5 0V2.25a.75.75 0 00-.75-.75h-15a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6z"}}),_c('path',{attrs:{"d":"M8.242 6a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM5.242 10.5a.75.75 0 010-1.5h9a.75.75 0 010 1.5h-9zM5.242 15a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5z"}})])
          )
        }
      }
    