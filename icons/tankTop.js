
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
            children.concat([_c('path',{attrs:{"d":"M4.5 24c-.827 0-1.5-.673-1.5-1.5V10.994a2.251 2.251 0 011.5-2.122A2.254 2.254 0 006 6.75V1.5C6 .673 6.673 0 7.5 0H9c.827 0 1.5.673 1.5 1.5V3c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5V1.5c0-.827.673-1.5 1.5-1.5h1.5c.827 0 1.5.673 1.5 1.5v5.25c0 .952.603 1.805 1.5 2.122.897.317 1.5 1.17 1.5 2.122V22.5c0 .827-.673 1.5-1.5 1.5h-15zm3-17.25A3.756 3.756 0 015 10.286a.752.752 0 00-.5.708V22.5h15V10.994a.752.752 0 00-.5-.708 3.756 3.756 0 01-2.5-3.536V1.5H15V3c0 1.654-1.346 3-3 3S9 4.654 9 3V1.5H7.5v5.25z"}})])
          )
        }
      }
    