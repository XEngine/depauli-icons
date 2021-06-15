
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24c-.827 0-1.5-.673-1.5-1.5V21c0-.827.673-1.5 1.5-1.5v-2.25A.75.75 0 016 16.5h.791l.71-12.792a.752.752 0 01.28-.544l3.75-3a.754.754 0 01.938 0l3.75 3a.751.751 0 01.28.543l.71 12.793H18a.75.75 0 01.75.75v2.25c.827 0 1.5.673 1.5 1.5v1.5c0 .827-.673 1.5-1.5 1.5H5.25zm0-1.5h13.5V21H5.25v1.5zm12-3V18H6.75v1.5h10.5zm-1.543-3L15.02 4.126 12 1.71 8.98 4.126 8.293 16.5h2.957V5.25a.75.75 0 011.5 0V16.5h2.957z"}})])
          )
        }
      }
    