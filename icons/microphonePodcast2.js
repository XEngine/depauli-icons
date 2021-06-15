
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
            children.concat([_c('path',{attrs:{"d":"M9 24a.75.75 0 010-1.5h2.25V18h-.75a6.758 6.758 0 01-6.75-6.75v-3a.75.75 0 011.5 0v3a5.256 5.256 0 005.25 5.25h3a5.256 5.256 0 005.25-5.25v-3a.75.75 0 011.5 0v3A6.758 6.758 0 0113.5 18h-.75v4.5H15a.75.75 0 010 1.5H9z"}}),_c('path',{attrs:{"d":"M10.5 15c-2.2-.133-3.871-2.002-3.749-4.167L6.75 4.125C6.628 1.993 8.29.134 10.454.001L13.5 0c2.2.133 3.871 2.002 3.749 4.167l.001 6.708c.122 2.132-1.54 3.992-3.705 4.124L13.5 15h-3zm-2.25-4.125c-.077 1.376.953 2.544 2.296 2.626l2.943-.001c1.313-.086 2.339-1.245 2.263-2.583V9H13.5a.75.75 0 010-1.5h2.25V6H13.5a.75.75 0 010-1.5h2.25v-.375c.077-1.376-.953-2.545-2.296-2.626L10.5 1.5c-1.307.081-2.327 1.24-2.251 2.583V4.5H10.5a.75.75 0 010 1.5H8.25v1.5h2.25a.75.75 0 010 1.5H8.25v1.875z"}})])
          )
        }
      }
    