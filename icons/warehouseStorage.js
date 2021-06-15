
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
            children.concat([_c('path',{attrs:{"d":"M1.755 24c-.965 0-1.75-.785-1.75-1.75V6.75c0-3.722 5.383-6.75 12-6.75s12 3.028 12 6.75v15.5c0 .965-.785 1.75-1.75 1.75h-20.5zm20.5-1.5a.25.25 0 00.25-.25V7.5h-21v14.75c0 .138.112.25.25.25h3.5V18c0-.827.673-1.5 1.5-1.5h1.5V12c0-.827.673-1.5 1.5-1.5h4.5c.827 0 1.5.673 1.5 1.5v4.5h1.5c.827 0 1.5.673 1.5 1.5v4.5h3.5zm-5 0V18h-4.5v4.5h4.5zm-10.5 0h4.5V18h-4.5v4.5zm7.5-6V12h-4.5v4.5h4.5zM22.393 6c-.743-2.555-5.152-4.5-10.388-4.5S2.36 3.445 1.617 6h20.776z"}})])
          )
        }
      }
    