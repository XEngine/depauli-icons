
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
            children.concat([_c('path',{attrs:{"d":"M11.749 23.947c-.261 0-.518-.068-.743-.197C9.503 22.895 2 18.201 2 9.799 2 4.423 6.374.049 11.75.049s9.75 4.374 9.75 9.75c0 3.544-1.3 6.822-3.865 9.744a21.008 21.008 0 01-5.142 4.208 1.51 1.51 0 01-.744.196zm.001-22.398c-4.549 0-8.25 3.701-8.25 8.25 0 7.573 6.871 11.865 8.249 12.648C19.405 18.076 20 11.661 20 9.799c0-4.549-3.701-8.25-8.25-8.25z"}}),_c('path',{attrs:{"d":"M15.5 15.699a.75.75 0 01-.75-.75v-2.25h-6v2.25a.75.75 0 01-1.5 0v-6c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v6a.75.75 0 01-.75.75zm-.75-4.5v-2.25c0-1.654-1.346-3-3-3s-3 1.346-3 3v2.25h6z"}}),_c('path',{attrs:{"d":"M11 8.949a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5H11z"}})])
          )
        }
      }
    