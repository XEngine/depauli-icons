
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
            children.concat([_c('path',{attrs:{"d":"M13.248 21a1.267 1.267 0 01-1.25-1.283V12.75h-1.5a.75.75 0 010-1.5h1.5V3.518a1.236 1.236 0 01.353-.883 1.25 1.25 0 01.883-.385h1.014a.75.75 0 010 1.5h-.75V19.5h.75a.75.75 0 010 1.5h-1zM19.498 6c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.345 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.672-1.5-1.5-1.5z"}}),_c('path',{attrs:{"d":"M15.749 9.75a.753.753 0 01-.725-.943 4.776 4.776 0 014.445-3.556h.06a4.775 4.775 0 014.444 3.556.755.755 0 01-.13.651.755.755 0 01-.595.292h-7.499zm6.36-1.5A3.256 3.256 0 0019.5 6.751a3.256 3.256 0 00-2.61 1.499h5.219zM19.498 20.25c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.345 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.672-1.5-1.5-1.5z"}}),_c('path',{attrs:{"d":"M15.748 24a.752.752 0 01-.724-.944 4.775 4.775 0 014.445-3.556l.03-.001.033.001a4.773 4.773 0 014.442 3.556.752.752 0 01-.726.944h-7.5zm6.361-1.5a3.257 3.257 0 00-2.61-1.499 3.256 3.256 0 00-2.61 1.499h5.22zM5.305 12.75A3.754 3.754 0 011.555 9c0-.647.171-1.288.494-1.853l.014-.024A3.765 3.765 0 015.305 5.25a3.772 3.772 0 013.701 3.17c.012.05.019.098.021.145.018.158.028.301.028.435a3.755 3.755 0 01-3.75 3.75zM3.069 8.747a2.252 2.252 0 002.236 2.503c1.02 0 1.885-.679 2.157-1.62a5.784 5.784 0 01-4.393-.883zm.675-1.363a4.255 4.255 0 003.626.729A2.247 2.247 0 005.305 6.75c-.591 0-1.144.227-1.561.634zM.805 18.75a.75.75 0 01-.75-.75c0-2.895 2.355-5.25 5.25-5.25s5.25 2.355 5.25 5.25a.75.75 0 01-.75.75h-9zm8.174-1.5c-.352-1.712-1.892-3-3.674-3s-3.322 1.288-3.674 3h7.348z"}})])
          )
        }
      }
    