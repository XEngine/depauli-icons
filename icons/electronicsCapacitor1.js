
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
            children.concat([_c('path',{attrs:{"d":"M12 24a.75.75 0 01-.75-.75V15h-7.5a.75.75 0 010-1.5h16.5a.75.75 0 010 1.5h-7.5v8.25A.75.75 0 0112 24zM3.75 10.5a.75.75 0 010-1.5h7.5V.75a.75.75 0 011.5 0V9h7.5a.75.75 0 010 1.5H3.75z"}})])
          )
        }
      }
    