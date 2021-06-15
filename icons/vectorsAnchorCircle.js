
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
            children.concat([_c('path',{attrs:{"d":"M10.5 24c-.827 0-1.5-.673-1.5-1.5v-1.226A9.714 9.714 0 012.727 15H1.5C.673 15 0 14.327 0 13.5v-3C0 9.673.673 9 1.5 9h1.227A9.71 9.71 0 019 2.727V1.5C9 .673 9.673 0 10.5 0h3c.827 0 1.5.673 1.5 1.5v1.227A9.712 9.712 0 0121.273 9H22.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-1.227A9.715 9.715 0 0115 21.273V22.5c0 .827-.673 1.5-1.5 1.5h-3zm0-1.5h3v-3h-3v3zM4.316 15A8.286 8.286 0 009 19.684V19.5c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v.183A8.283 8.283 0 0019.683 15H19.5c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h.183A8.277 8.277 0 0015 4.317V4.5c0 .827-.673 1.5-1.5 1.5h-3C9.673 6 9 5.327 9 4.5v-.183A8.28 8.28 0 004.317 9H4.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-.184zM19.5 13.5h3v-3h-3v3zm-18 0h3v-3h-3v3zm9-9h3v-3h-3v3z"}})])
          )
        }
      }
    