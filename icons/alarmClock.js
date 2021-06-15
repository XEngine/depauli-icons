
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
            children.concat([_c('path',{attrs:{"d":"M18 24a.746.746 0 01-.671-.415l-1.04-2.081a9.749 9.749 0 01-8.578.001l-1.041 2.08a.744.744 0 01-1.005.336.75.75 0 01-.336-1.006l1.089-2.177A9.727 9.727 0 012.25 12.75C2.25 7.374 6.624 3 12 3s9.75 4.374 9.75 9.75a9.724 9.724 0 01-4.168 7.987l1.089 2.177A.751.751 0 0118 24zM12 4.5c-4.549 0-8.25 3.701-8.25 8.25S7.451 21 12 21s8.25-3.701 8.25-8.25S16.549 4.5 12 4.5z"}}),_c('path',{attrs:{"d":"M8.609 13.5a.75.75 0 010-1.5h2.641V7.5a.75.75 0 011.5 0v5.25a.75.75 0 01-.75.75H8.609zM1.5 4.5a.75.75 0 01-.469-1.336l3.75-3a.754.754 0 011.055.118.75.75 0 01-.117 1.054l-3.75 3A.754.754 0 011.5 4.5zM22.5 4.5a.753.753 0 01-.468-.164l-3.75-3a.75.75 0 01.936-1.172l3.751 3A.75.75 0 0122.5 4.5z"}})])
          )
        }
      }
    