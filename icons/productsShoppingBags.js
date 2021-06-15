
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24C.969 23.934-.01 22.902 0 21.65V7.5a2.252 2.252 0 012.25-2.25H4.5v-1.5A3.768 3.768 0 018.248 0 3.769 3.769 0 0112 3.748V5.25h2.25A2.252 2.252 0 0116.5 7.5v.75a.75.75 0 01-1.5 0V7.5a.75.75 0 00-.75-.75H12v3a.75.75 0 01-1.5 0v-3H6v3a.75.75 0 01-1.5 0v-3H2.25a.75.75 0 00-.75.75v14.156a.833.833 0 00.789.845L10.5 22.5a.75.75 0 010 1.5H2.25zM10.5 5.25v-1.5A2.264 2.264 0 008.249 1.5 2.263 2.263 0 006 3.752V5.25h4.5z"}}),_c('path',{attrs:{"d":"M15 23.906c-.827 0-1.5-.673-1.5-1.5v-7.5c0-.827.673-1.5 1.5-1.5h2.25l-1.35-1.8a.75.75 0 011.2-.9l1.65 2.2 1.65-2.2a.753.753 0 011.049-.151c.331.249.398.72.15 1.05l-1.35 1.8h2.25c.827 0 1.5.673 1.5 1.5v7.5c0 .827-.673 1.5-1.5 1.5H15zm7.5-1.5v-3h-3v3h3zm-7.5 0h3v-3h-3v3zm7.5-4.5v-3h-3v3h3zm-4.5 0v-3h-3v3h3z"}})])
          )
        }
      }
    