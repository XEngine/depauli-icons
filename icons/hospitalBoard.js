
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M10.5 19.5c-.827 0-1.5-.673-1.5-1.5v-3H6c-.827 0-1.5-.673-1.5-1.5v-3C4.5 9.673 5.173 9 6 9h3V6c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v3h3c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-3v3c0 .827-.673 1.5-1.5 1.5h-3zm-4.5-6h3.75a.75.75 0 01.75.75V18h3v-3.75a.75.75 0 01.75-.75H18v-3h-3.75a.75.75 0 01-.75-.75V6h-3v3.75a.75.75 0 01-.75.75H6v3z"}})])
          )
        }
      }
    