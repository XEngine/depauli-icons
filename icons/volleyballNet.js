
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
            children.concat([_c('path',{attrs:{"d":"M23.25 24a.75.75 0 01-.75-.75V18h-21v5.25a.75.75 0 01-1.5 0v-14C0 8.285.785 7.5 1.75 7.5h20.5c.965 0 1.75.785 1.75 1.75v14a.75.75 0 01-.75.75zm-.75-7.5v-3h-3.75v3h3.75zm-5.25 0v-3h-4.5v3h4.5zm-6 0v-3h-4.5v3h4.5zm-6 0v-3H1.5v3h3.75zM22.5 12V9.25a.25.25 0 00-.25-.25h-3.5v3h3.75zm-5.25 0V9h-4.5v3h4.5zm-6 0V9h-4.5v3h4.5zm-6 0V9h-3.5a.25.25 0 00-.25.25V12h3.75zM18.75 6c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    