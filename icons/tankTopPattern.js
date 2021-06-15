
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
            children.concat([_c('path',{attrs:{"d":"M4.5 24c-.827 0-1.5-.673-1.5-1.5V10.994a2.255 2.255 0 011.082-1.918c.148-.091.281-.156.418-.204A2.254 2.254 0 006 6.75V1.5C6 .673 6.673 0 7.5 0H9c.827 0 1.5.673 1.5 1.5V3c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5V1.5c0-.827.673-1.5 1.5-1.5h1.5c.827 0 1.5.673 1.5 1.5v5.25c0 .952.603 1.805 1.5 2.122.136.048.27.113.417.204a.77.77 0 01.148.097c.586.424.935 1.103.935 1.821V22.5c0 .827-.673 1.5-1.5 1.5h-15zm0-1.5h15v-3h-15v3zm15-4.5v-3h-15v3h15zm0-4.5v-2.506a.744.744 0 00-.188-.494H4.688a.742.742 0 00-.188.494V13.5h15zM17.252 9a3.727 3.727 0 01-.752-2.25V1.5H15V3c0 1.654-1.346 3-3 3S9 4.654 9 3V1.5H7.5v5.25c0 .823-.267 1.607-.752 2.25h10.504z"}})])
          )
        }
      }
    