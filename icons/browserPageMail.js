
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
            children.concat([_c('path',{attrs:{"d":"M3 22.5a2.252 2.252 0 01-2.25-2.25V3.75A2.252 2.252 0 013 1.5h18a2.252 2.252 0 012.25 2.25v16.5A2.252 2.252 0 0121 22.5H3zm-.75-2.25c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V7.5H2.25v12.75zM21.75 6V3.75A.75.75 0 0021 3H3a.75.75 0 00-.75.75V6h19.5z"}}),_c('path',{attrs:{"d":"M5.25 13.5c-.827 0-1.5-.673-1.5-1.5v-1.5c0-.827.673-1.5 1.5-1.5h13.5c.827 0 1.5.673 1.5 1.5V12c0 .827-.673 1.5-1.5 1.5H5.25zm0-1.5h13.5v-1.5H5.25V12zM5.25 19.5c-.827 0-1.5-.673-1.5-1.5v-1.5c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5V18c0 .827-.673 1.5-1.5 1.5h-3zm0-1.5h3v-1.5h-3V18zM12 16.5a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5H12zM12 19.5a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5H12z"}})])
          )
        }
      }
    