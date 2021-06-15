
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
            children.concat([_c('path',{attrs:{"d":"M12.04 22.125a.442.442 0 01-.049-.003 2.23 2.23 0 01-1.677-.804L.973 10.014A2.235 2.235 0 01.464 8.76a.78.78 0 01-.011-.173 2.21 2.21 0 01.45-1.361L4.24 2.775a2.232 2.232 0 01.782-.654c.313-.16.667-.246 1.018-.246h12a2.261 2.261 0 011.8.9l3.335 4.452a2.242 2.242 0 01-.072 2.79l-9.336 11.297a2.25 2.25 0 01-1.681.808.367.367 0 01-.046.003zm0-2.965l3.521-9.785H8.519l3.521 9.785zm-1.618-.067L6.925 9.375H2.391l8.031 9.718zm3.238-.004l8.027-9.714h-4.532l-3.495 9.714zm8.127-11.214l-2.764-3.689-1.328 3.689h4.092zm-6.747 0l-3-4-3 4h6zm-8.655 0L5.057 4.187 2.292 7.875h4.093zm1.33-.733l2.825-3.767H6.359l1.356 3.767zm8.65-.001l1.355-3.766h-4.18l2.825 3.766z"}})])
          )
        }
      }
    