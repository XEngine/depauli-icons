
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
            children.concat([_c('path',{attrs:{"d":"M5.273 12.75c-2.895 0-5.25-2.355-5.25-5.25s2.355-5.25 5.25-5.25h18a.75.75 0 010 1.5H8.94a5.21 5.21 0 011.583 3.75 5.256 5.256 0 01-5.25 5.25zm0-9c-2.068 0-3.75 1.682-3.75 3.75s1.682 3.75 3.75 3.75 3.75-1.682 3.75-3.75-1.682-3.75-3.75-3.75zM.773 21.75a.75.75 0 010-1.5h14.333a5.21 5.21 0 01-1.583-3.75c0-2.895 2.355-5.25 5.25-5.25s5.25 2.355 5.25 5.25-2.355 5.25-5.25 5.25h-18zm18-9c-2.068 0-3.75 1.682-3.75 3.75s1.682 3.75 3.75 3.75 3.75-1.682 3.75-3.75-1.682-3.75-3.75-3.75z"}})])
          )
        }
      }
    