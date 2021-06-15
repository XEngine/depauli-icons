
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
            children.concat([_c('path',{attrs:{"d":"M13.5 19.5c-.827 0-1.5-.673-1.5-1.5v-.75h-.75c-.827 0-1.5-.673-1.5-1.5v-1.5c0-.827.673-1.5 1.5-1.5H12V12c0-.827.673-1.5 1.5-1.5H15c.827 0 1.5.673 1.5 1.5v.75h.75c.827 0 1.5.673 1.5 1.5v1.5c0 .827-.673 1.5-1.5 1.5h-.75V18c0 .827-.673 1.5-1.5 1.5h-1.5zm-2.25-3.75h1.5a.75.75 0 01.75.75V18H15v-1.5a.75.75 0 01.75-.75h1.5v-1.5h-1.5a.75.75 0 01-.75-.75V12h-1.5v1.5a.75.75 0 01-.75.75h-1.5v1.5z"}}),_c('path',{attrs:{"d":"M3 22.5c-1.654 0-3-1.346-3-3V3.75A2.252 2.252 0 012.25 1.5h6a2.252 2.252 0 012.25 2.25v.75h9.75a.75.75 0 010 1.5H10.5C9.673 6 9 5.327 9 4.5v-.75A.75.75 0 008.25 3h-6a.75.75 0 00-.75.75V19.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5V8.25a.75.75 0 01.75-.75h18a.75.75 0 01.75.75V19.5c0 1.654-1.346 3-3 3H3zM21 21c.827 0 1.5-.673 1.5-1.5V9H6v10.5c0 .536-.139 1.049-.401 1.5H21z"}})])
          )
        }
      }
    