
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
            children.concat([_c('path',{attrs:{"d":"M6.381 21.501c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h4.757L2.691 7.053a1.502 1.502 0 010-2.122l2.119-2.12a1.49 1.49 0 011.061-.439c.401 0 .778.156 1.061.439l8.45 8.448V6.501c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v12.75a2.252 2.252 0 01-2.25 2.25H6.381zm0-1.5h12.75a.75.75 0 00.75-.75V6.501h-3v6.568a.75.75 0 01-1.281.53L5.87 3.871 3.752 5.992l9.728 9.729a.749.749 0 01-.53 1.28H6.381v3z"}})])
          )
        }
      }
    