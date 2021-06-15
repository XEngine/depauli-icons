
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
            children.concat([_c('path',{attrs:{"d":"M5.237 24.007a2.754 2.754 0 01-2.736-2.692V2.986a3.008 3.008 0 013-2.982h12a2.252 2.252 0 012.25 2.25v2.379a2.26 2.26 0 011.5 2.121v15.525a1.765 1.765 0 01-1.749 1.728H5.237zM4 21.3a1.242 1.242 0 001.236 1.207h14.249c.148 0 .262-.11.265-.244V6.753a.75.75 0 00-.75-.75H5.5c-.535 0-1.049-.14-1.5-.402V21.3zM5.5 1.503c-.826 0-1.499.672-1.5 1.498 0 .828.673 1.502 1.5 1.502h12.75v-2.25a.75.75 0 00-.75-.75h-12z"}}),_c('path',{attrs:{"d":"M7 17.253a.752.752 0 01-.53-1.281l1.72-1.72-1.72-1.72a.744.744 0 010-1.06c.141-.142.33-.22.53-.22s.389.078.53.22l2.25 2.25a.752.752 0 010 1.061l-2.25 2.25a.741.741 0 01-.53.22zM12.087 15.003a.75.75 0 010-1.5H16a.75.75 0 010 1.5h-3.913z"}})])
          )
        }
      }
    