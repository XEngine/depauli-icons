
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
            children.concat([_c('path',{attrs:{"d":"M2.999 22.5a2.252 2.252 0 01-2.25-2.25V3.75a2.252 2.252 0 012.25-2.25h18a2.252 2.252 0 012.25 2.25v16.5a2.252 2.252 0 01-2.25 2.25h-18zm-.75-2.25c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V7.5h-19.5v12.75zM21.749 6V3.75a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75V6h19.5z"}}),_c('path',{attrs:{"d":"M5.249 16.5c-.827 0-1.5-.673-1.5-1.5v-4.5c0-.827.673-1.5 1.5-1.5h4.5c.827 0 1.5.673 1.5 1.5V15c0 .827-.673 1.5-1.5 1.5h-4.5zm0-1.5h4.5v-4.5h-4.5V15zM4.499 19.5a.75.75 0 010-1.5H10.5a.75.75 0 010 1.5H4.499zM14.249 19.5c-.827 0-1.5-.673-1.5-1.5v-7.5c0-.827.673-1.5 1.5-1.5h4.5c.827 0 1.5.673 1.5 1.5V18c0 .827-.673 1.5-1.5 1.5h-4.5zm0-1.5h4.5v-3h-4.5v3zm4.5-4.5v-3h-4.5v3h4.5z"}})])
          )
        }
      }
    