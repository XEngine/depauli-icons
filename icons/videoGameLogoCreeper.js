
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
            children.concat([_c('path',{attrs:{"d":"M1.75 24C.785 24 0 23.215 0 22.25V1.75C0 .785.785 0 1.75 0h20.5C23.215 0 24 .785 24 1.75v20.5c0 .965-.785 1.75-1.75 1.75H1.75zm0-22.5a.25.25 0 00-.25.25v20.5c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75z"}}),_c('path',{attrs:{"d":"M15.75 21c-.827 0-1.5-.673-1.5-1.5V18h-4.5v1.5c0 .827-.673 1.5-1.5 1.5h-1.5c-.827 0-1.5-.673-1.5-1.5v-6.75c0-.827.673-1.5 1.5-1.5H9v-1.5H4.5c-.827 0-1.5-.673-1.5-1.5V4.5C3 3.673 3.673 3 4.5 3H9c.827 0 1.5.673 1.5 1.5v3.75h3V4.5c0-.827.673-1.5 1.5-1.5h4.5c.827 0 1.5.673 1.5 1.5v3.75c0 .827-.673 1.5-1.5 1.5H15v1.5h2.25c.827 0 1.5.673 1.5 1.5v6.75c0 .827-.673 1.5-1.5 1.5h-1.5zM15 16.5a.75.75 0 01.75.75v2.25h1.5v-6.75H15c-.827 0-1.5-.673-1.5-1.5v-1.5h-3v1.5c0 .827-.673 1.5-1.5 1.5H6.75v6.75h1.5v-2.25A.75.75 0 019 16.5h6zm4.5-8.25V4.5H15v3.75h4.5zm-15 0H9V4.5H4.5v3.75z"}})])
          )
        }
      }
    