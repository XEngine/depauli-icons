
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
            children.concat([_c('path',{attrs:{"d":"M7.5 24c-1.654 0-3-1.346-3-3V3c0-1.654 1.346-3 3-3h9c1.654 0 3 1.346 3 3v18c0 1.654-1.346 3-3 3h-9zM6 21c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5v-1.5H6V21zm12-3V3c0-.827-.673-1.5-1.5-1.5h-9C6.673 1.5 6 2.173 6 3v15h12z"}}),_c('path',{attrs:{"d":"M11.25 14.25c-.827 0-1.5-.673-1.5-1.5V12H9c-.827 0-1.5-.673-1.5-1.5V9c0-.827.673-1.5 1.5-1.5h.75v-.75c0-.827.673-1.5 1.5-1.5h1.5c.827 0 1.5.673 1.5 1.5v.75H15c.827 0 1.5.673 1.5 1.5v1.5c0 .827-.673 1.5-1.5 1.5h-.75v.75c0 .827-.673 1.5-1.5 1.5h-1.5zM9 10.5h1.5a.75.75 0 01.75.75v1.5h1.5v-1.5a.75.75 0 01.75-.75H15V9h-1.5a.75.75 0 01-.75-.75v-1.5h-1.5v1.5a.75.75 0 01-.75.75H9v1.5z"}})])
          )
        }
      }
    