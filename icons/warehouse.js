
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
            children.concat([_c('path',{attrs:{"d":"M1.755 24c-.965 0-1.75-.785-1.75-1.75V6.75c0-3.722 5.383-6.75 12-6.75s12 3.028 12 6.75v15.5c0 .965-.785 1.75-1.75 1.75h-20.5zm20.5-1.5a.25.25 0 00.25-.25V7.5h-21v14.75c0 .138.112.25.25.25h2V11.75c0-.689.561-1.25 1.25-1.25h14c.689 0 1.25.561 1.25 1.25V22.5h2zm-3.5 0V12h-13.5v10.5h13.5zM22.393 6c-.743-2.555-5.152-4.5-10.388-4.5S2.36 3.445 1.617 6h20.776z"}}),_c('path',{attrs:{"d":"M10.505 4.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM7.505 16.5a.75.75 0 010-1.5h9a.75.75 0 010 1.5h-9zM7.505 20.25a.75.75 0 010-1.5h9a.75.75 0 010 1.5h-9z"}})])
          )
        }
      }
    