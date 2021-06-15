
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
            children.concat([_c('path',{attrs:{"d":"M18 23.998c-.827 0-1.5-.673-1.5-1.5H6c0 .827-.673 1.5-1.5 1.5h-3c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5v-12c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5h10.5c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5v12c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-3zm0-1.5h3v-3h-3v3zm-16.5 0h3v-3h-3v3zm15-1.5v-1.5c0-.827.673-1.5 1.5-1.5h1.5v-12H18c-.827 0-1.5-.673-1.5-1.5v-1.5H6v1.5c0 .827-.673 1.5-1.5 1.5H3v12h1.5c.827 0 1.5.673 1.5 1.5v1.5h10.5zm1.5-16.5h3v-3h-3v3zm-16.5 0h3v-3h-3v3z"}}),_c('path',{attrs:{"d":"M8.219 17.998a.75.75 0 010-1.5H10.5v-9H9c-.401 0-.779.157-1.062.44S7.5 8.599 7.5 8.999a.75.75 0 01-1.5.002 2.978 2.978 0 01.877-2.122 2.982 2.982 0 012.12-.881H13.5c1.654 0 3 1.346 3 3A.751.751 0 0115 9c0-.828-.673-1.502-1.5-1.502H12v9h2.219a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    