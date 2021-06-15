
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
            children.concat([_c('path',{attrs:{"d":"M11.749 23.897c-.26 0-.517-.068-.742-.196C9.503 22.844 2 18.147 2 9.749c0-5.376 4.374-9.75 9.75-9.75s9.75 4.374 9.75 9.75c0 3.544-1.3 6.822-3.865 9.744a21.033 21.033 0 01-5.142 4.208 1.512 1.512 0 01-.744.196zm.001-22.398c-4.549 0-8.25 3.701-8.25 8.25 0 7.569 6.872 11.864 8.249 12.648C19.405 18.026 20 11.611 20 9.749c0-4.549-3.701-8.25-8.25-8.25z"}}),_c('path',{attrs:{"d":"M7.75 14.145c-.689 0-1.25-.561-1.25-1.25v-5.75c0-.689.561-1.25 1.25-1.25h8c.689 0 1.25.561 1.25 1.25v5.75c0 .689-.561 1.25-1.25 1.25h-8zm7.75-1.5V8.796l-3.334 2.223a.75.75 0 01-.832 0L8 8.796v3.849h7.5zm-3.75-3.151l3.148-2.099H8.602l3.148 2.099z"}})])
          )
        }
      }
    