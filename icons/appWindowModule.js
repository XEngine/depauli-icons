
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
            children.concat([_c('path',{attrs:{"d":"M2.26 21.003a2.252 2.252 0 01-2.25-2.25v-16.5A2.252 2.252 0 012.26.003h18a2.252 2.252 0 012.25 2.25v6a.75.75 0 01-1.5 0v-2.25H1.51v12.75c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6zm18.75-16.5v-2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.25h19.5zM19.51 24.003c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-3zm0-1.5h3v-3h-3v3z"}}),_c('path',{attrs:{"d":"M12.01 24.003c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-3zm0-1.5h3v-3h-3v3zM16.51 16.503c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-3zm0-1.5h3v-3h-3v3z"}})])
          )
        }
      }
    