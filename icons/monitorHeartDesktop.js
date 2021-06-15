
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
            children.concat([_c('path',{attrs:{"d":"M6 22.5A.75.75 0 016 21h1.615l.5-3H3c-1.654 0-3-1.346-3-3V4.5c0-1.654 1.346-3 3-3h18c1.654 0 3 1.346 3 3V15c0 1.654-1.346 3-3 3h-5.115l.5 3H18a.75.75 0 010 1.5H6zm8.865-1.5l-.5-3h-4.73l-.5 3h5.73zM3 3c-.827 0-1.5.673-1.5 1.5V15c0 .827.673 1.5 1.5 1.5h18c.827 0 1.5-.673 1.5-1.5V4.5c0-.827-.673-1.5-1.5-1.5H3z"}}),_c('path',{attrs:{"d":"M9.703 14.629a1.121 1.121 0 01-.936-.501L6.348 10.5H3.433a.75.75 0 010-1.5h3.116c.378 0 .728.188.937.502l2.172 3.256 3.633-7.266a1.125 1.125 0 011.942-.12L17.652 9h2.281a.75.75 0 010 1.5h-2.482c-.378 0-.728-.188-.936-.501l-2.172-3.257-3.633 7.266a1.118 1.118 0 01-1.007.621z"}})])
          )
        }
      }
    