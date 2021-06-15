
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
            children.concat([_c('path',{attrs:{"d":"M11.291 14.25c-.827 0-1.5-.673-1.5-1.5V12h-.75c-.827 0-1.5-.673-1.5-1.5V9c0-.827.673-1.5 1.5-1.5h.75v-.75c0-.827.673-1.5 1.5-1.5h1.5c.827 0 1.5.673 1.5 1.5v.75h.75c.827 0 1.5.673 1.5 1.5v1.5c0 .827-.673 1.5-1.5 1.5h-.75v.75c0 .827-.673 1.5-1.5 1.5h-1.5zm-2.25-3.75h1.5a.75.75 0 01.75.75v1.5h1.5v-1.5a.75.75 0 01.75-.75h1.5V9h-1.5a.75.75 0 01-.75-.75v-1.5h-1.5v1.5a.75.75 0 01-.75.75h-1.5v1.5z"}}),_c('path',{attrs:{"d":"M8.291 24a2.252 2.252 0 01-2.25-2.25v-2.938L3.634 4.366A3.754 3.754 0 017.333 0h9.417a3.754 3.754 0 013.699 4.366l-2.408 14.446v2.938a2.252 2.252 0 01-2.25 2.25h-7.5zm-.75-2.25c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75V19.5h-9v2.25zM16.656 18L18.97 4.12a2.252 2.252 0 00-2.22-2.62H7.333a2.252 2.252 0 00-2.22 2.62L7.426 18h9.23z"}})])
          )
        }
      }
    