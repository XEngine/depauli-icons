
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
            children.concat([_c('path',{attrs:{"d":"M1.75 22.5C.785 22.5 0 21.715 0 20.75v-12A2.754 2.754 0 012.75 6H6v-.75A3.754 3.754 0 019.75 1.5h4.5A3.754 3.754 0 0118 5.25V6h3.25A2.754 2.754 0 0124 8.75v12c0 .965-.785 1.75-1.75 1.75H1.75zm-.25-1.75c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V16.5h-1.518A1.752 1.752 0 0119.25 18H4.75c-.88 0-1.61-.653-1.732-1.5H1.5v4.25zm17.75-4.25a.25.25 0 00.25-.25v-5.5a.25.25 0 00-.25-.25h-3.5v6h3.5zm-5 0v-6h-4.5v6h4.5zm-9.5-6a.25.25 0 00-.25.25v5.5c0 .138.112.25.25.25h3.5v-6h-3.5zM22.5 15V8.75c0-.689-.561-1.25-1.25-1.25H2.75c-.689 0-1.25.561-1.25 1.25V15H3v-4.25C3 9.785 3.785 9 4.75 9h14.5c.965 0 1.75.785 1.75 1.75L22.5 15zm-6-9v-.75A2.252 2.252 0 0014.25 3h-4.5A2.252 2.252 0 007.5 5.25V6h9z"}})])
          )
        }
      }
    