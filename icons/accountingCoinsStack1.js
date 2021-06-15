
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
            children.concat([_c('path',{attrs:{"d":"M7.5 24c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5v-3h-3c-.827 0-1.5-.673-1.5-1.5v-3C3 9.673 3.673 9 4.5 9V6c0-.827.673-1.5 1.5-1.5h10.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5v3h3c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5v3c0 .827-.673 1.5-1.5 1.5H7.5zm0-1.5H18v-3H7.5v3zM9 18h10.5v-3L9 18zm-4.5-4.5H15v-3H4.5v3zM6 9h10.5V6H6v3zM21.75 11.25a.75.75 0 01-.75-.75v-.75h-.75a.75.75 0 010-1.5H21V7.5a.75.75 0 011.5 0v.75h.75a.75.75 0 010 1.5h-.75v.75a.75.75 0 01-.75.75zM2.25 4.5a.75.75 0 01-.75-.75V3H.75a.75.75 0 010-1.5h.75V.75a.75.75 0 011.5 0v.75h.75a.75.75 0 010 1.5H3v.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    