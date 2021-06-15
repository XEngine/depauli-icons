
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h4.5v-8.25c0-.827.673-1.5 1.5-1.5V9c-.827 0-1.5-.673-1.5-1.5v-6c0-.827.673-1.5 1.5-1.5h10.5c.827 0 1.5.673 1.5 1.5v3.75c0 .827-.673 1.5-1.5 1.5v3.75c.827 0 1.5.673 1.5 1.5v10.5h4.5a.75.75 0 010 1.5H.75zm16.5-1.5V21h-3a.75.75 0 010-1.5h3V12H13.5v1.5a.75.75 0 01-.75.75h-6v2.25h3a.75.75 0 010 1.5h-3v1.5h4.5a.75.75 0 010 1.5h-4.5v1.5h10.5zM12 12.75v-1.5a.75.75 0 01.75-.75h3V6.75H12v1.5a.75.75 0 01-.75.75h-3v3.75H12zM6.75 7.5h3.75V6a.75.75 0 01.75-.75h6V1.5H6.75V3h3a.75.75 0 010 1.5h-3v3z"}})])
          )
        }
      }
    