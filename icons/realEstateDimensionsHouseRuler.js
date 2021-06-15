
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
            children.concat([_c('path',{attrs:{"d":"M12.75 22.5a2.252 2.252 0 01-2.25-2.25v-3a.75.75 0 011.5 0v3c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-3a.75.75 0 011.5 0v3a2.252 2.252 0 01-2.25 2.25h-6z"}}),_c('path',{attrs:{"d":"M8.25 16.5a.75.75 0 01-.501-1.307l6.497-5.85a2.248 2.248 0 013.01-.001L21 12.715V10.5a.75.75 0 011.5 0v3.565l1.252 1.127a.748.748 0 01-.502 1.307.75.75 0 01-.502-.193l-6.497-5.85a.75.75 0 00-1.002 0l-6.497 5.849a.738.738 0 01-.502.195z"}}),_c('path',{attrs:{"d":"M1.5 24C.673 24 0 23.327 0 22.5v-21C0 .673.673 0 1.5 0h21c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5H6v16.5c0 .827-.673 1.5-1.5 1.5h-3zm0-1.5h3V18h-.75a.75.75 0 010-1.5h.75V12h-.75a.75.75 0 010-1.5h.75V6h-3v16.5zm21-18v-3H6v3h4.5v-.75a.75.75 0 011.5 0v.75h4.5v-.75a.75.75 0 011.5 0v.75h4.5zm-18 0v-3h-3v3h3z"}})])
          )
        }
      }
    