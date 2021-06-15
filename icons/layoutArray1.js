
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
            children.concat([_c('path',{attrs:{"d":"M8.25 23.997A2.252 2.252 0 016 21.747v-19.5a2.252 2.252 0 012.25-2.25h7.5A2.252 2.252 0 0118 2.247v19.5a2.252 2.252 0 01-2.25 2.25h-7.5zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75v-19.5a.75.75 0 00-.75-.75h-7.5zM1.5 20.997c-.827 0-1.5-.673-1.5-1.5v-15c0-.827.673-1.5 1.5-1.5H3c.827 0 1.5.673 1.5 1.5v15c0 .827-.673 1.5-1.5 1.5H1.5zm0-1.5H3v-15H1.5v15zM21 20.997c-.827 0-1.5-.673-1.5-1.5v-15c0-.827.673-1.5 1.5-1.5h1.5c.827 0 1.5.673 1.5 1.5v15c0 .827-.673 1.5-1.5 1.5H21zm0-1.5h1.5v-15H21v15z"}})])
          )
        }
      }
    