
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
            children.concat([_c('path',{attrs:{"d":"M10.5 23.998c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h6v-1.5h-6c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h3v-.75a.75.75 0 00-.75-.75h-4.5A2.252 2.252 0 016 6.748v-.75H1.5c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h12c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-6v.75c0 .414.336.75.75.75h4.5A2.252 2.252 0 0115 9.748v.75h7.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5H18v1.5h4.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-12zm0-1.5h12v-3h-12v3zm0-7.5h12v-3h-12v3zm-9-10.5h12v-3h-12v3z"}})])
          )
        }
      }
    