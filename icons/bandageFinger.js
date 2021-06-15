
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
            children.concat([_c('path',{attrs:{"d":"M.75 22.5a.75.75 0 010-1.5h6A5.256 5.256 0 0012 15.75V9H8.25a.746.746 0 01-.693-.463.745.745 0 01.163-.817l1.53-1.53a1.903 1.903 0 00-.048-2.685 1.926 1.926 0 00-1.348-.535 1.892 1.892 0 00-1.342.579L1.28 8.781A.746.746 0 01.22 8.78C.078 8.639 0 8.451 0 8.25s.078-.389.22-.53l5.223-5.223a3.369 3.369 0 012.38-1.027h.041a3.403 3.403 0 012.459 5.769l-.262.261H20.25A3.754 3.754 0 0124 11.25 3.754 3.754 0 0120.25 15H13.5v.75a6.758 6.758 0 01-6.75 6.75h-6zm19.5-9a2.252 2.252 0 002.25-2.25c0-1.24-1.009-2.25-2.25-2.25H18v4.5h2.25zm-3.75 0V9h-3v4.5h3z"}})])
          )
        }
      }
    