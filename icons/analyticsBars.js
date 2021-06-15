
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
            children.concat([_c('path',{attrs:{"d":"M.75 22.5a.75.75 0 010-1.5h.75v-9c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v9H9V3c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v18h1.5V7.5c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5V21h.75a.75.75 0 010 1.5H.75zM21 21V7.5h-3V21h3zm-7.5 0V3h-3v18h3zM6 21v-9H3v9h3z"}})])
          )
        }
      }
    