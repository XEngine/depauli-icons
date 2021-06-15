
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
            children.concat([_c('path',{attrs:{"d":"M17 24.013a.75.75 0 01-.75-.75v-2.25h-9v2.25a.75.75 0 01-1.5 0v-2.25h-3c-.827 0-1.5-.673-1.5-1.5v-3.75c0-.827.673-1.5 1.5-1.5h3v-3.75h-3c-.827 0-1.5-.673-1.5-1.5v-3.75c0-.827.673-1.5 1.5-1.5h3v-3a.75.75 0 011.5 0v3h9v-3a.75.75 0 011.5 0v3h3c.827 0 1.5.673 1.5 1.5v3.75c0 .827-.673 1.5-1.5 1.5h-3v3.75h3c.827 0 1.5.673 1.5 1.5v3.75c0 .827-.673 1.5-1.5 1.5h-3v2.25a.75.75 0 01-.75.75zm3.75-4.5v-3.75h-3v3.75h3zm-4.5 0v-3.75h-9v3.75h9zm-13.5 0h3v-3.75h-3v3.75zm13.5-5.25v-3.75h-9v3.75h9zm4.5-5.25v-3.75h-3v3.75h3zm-4.5 0v-3.75h-9v3.75h9zm-13.5 0h3v-3.75h-3v3.75z"}})])
          )
        }
      }
    