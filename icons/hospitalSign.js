
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
            children.concat([_c('path',{attrs:{"d":"M12.75 18c-.827 0-1.5-.673-1.5-1.5V15h-1.5c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h1.5V7.5c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5V9h1.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-1.5v1.5c0 .827-.673 1.5-1.5 1.5h-3zm-3-4.5H12a.75.75 0 01.75.75v2.25h3v-2.25a.75.75 0 01.75-.75h2.25v-3H16.5a.75.75 0 01-.75-.75V7.5h-3v2.25a.75.75 0 01-.75.75H9.75v3z"}}),_c('path',{attrs:{"d":"M1.5 24a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0V6h3V4.75C5.25 3.785 6.035 3 7 3h14.5c.965 0 1.75.785 1.75 1.75v14.5c0 .965-.785 1.75-1.75 1.75H7c-.965 0-1.75-.785-1.75-1.75V18h-3v5.25a.75.75 0 01-.75.75zM7 4.5a.25.25 0 00-.25.25v14.5c0 .138.112.25.25.25h14.5a.25.25 0 00.25-.25V4.75a.25.25 0 00-.25-.25H7zm-1.75 12v-9h-3v9h3z"}})])
          )
        }
      }
    