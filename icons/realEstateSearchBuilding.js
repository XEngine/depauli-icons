
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
            children.concat([_c('path',{attrs:{"d":"M23.25 24a.743.743 0 01-.53-.22l-4.068-4.068A11.2 11.2 0 0111.25 22.5C5.047 22.5 0 17.453 0 11.25S5.047 0 11.25 0 22.5 5.047 22.5 11.25c0 2.733-.987 5.347-2.788 7.402l4.068 4.068a.744.744 0 010 1.06.749.749 0 01-.53.22zm-12-22.5c-5.376 0-9.75 4.374-9.75 9.75S5.874 21 11.25 21 21 16.626 21 11.25 16.626 1.5 11.25 1.5z"}}),_c('path',{attrs:{"d":"M5.25 16.5a.75.75 0 010-1.5h1.5V6c0-.827.673-1.5 1.5-1.5h6c.827 0 1.5.673 1.5 1.5v9h1.5a.75.75 0 010 1.5h-12zm9-1.5v-2.25H12a.75.75 0 010-1.5h2.25v-1.5H12a.75.75 0 010-1.5h2.25V6h-6v9h6z"}})])
          )
        }
      }
    