
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
            children.concat([_c('path',{attrs:{"d":"M9.5 12.003a.75.75 0 010-1.5H14a.75.75 0 010 1.5H9.5z"}}),_c('path',{attrs:{"d":"M11.749 23.901c-.261 0-.518-.068-.743-.197C9.503 22.849 2 18.155 2 9.753 2 4.377 6.374.003 11.75.003s9.75 4.374 9.75 9.75c0 3.544-1.3 6.822-3.865 9.744a21.008 21.008 0 01-5.142 4.208 1.51 1.51 0 01-.744.196zm.001-22.398c-4.549 0-8.25 3.701-8.25 8.25 0 7.573 6.871 11.865 8.249 12.648C19.405 18.03 20 11.615 20 9.753c0-4.549-3.701-8.25-8.25-8.25z"}})])
          )
        }
      }
    