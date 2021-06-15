
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
            children.concat([_c('path',{attrs:{"d":"M19.5 22.5c-.827 0-1.5-.673-1.5-1.5H6c0 .827-.673 1.5-1.5 1.5h-3C.673 22.5 0 21.827 0 21v-3c0-.827.673-1.5 1.5-1.5h2.536L9.067 6.439A1.457 1.457 0 019 6V3c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v3c0 .147-.022.292-.066.434L20.685 16.5H22.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-3zm0-1.5h3v-3h-3v3zm-18 0h3v-3h-3v3zM18 19.5V18c0-.654.421-1.211 1.005-1.416l-5.208-9.115a1.413 1.413 0 01-.297.031h-3c-.092 0-.183-.009-.274-.026l-4.713 9.427c.307.28.487.677.487 1.099v1.5h12zM10.5 6h3V3h-3v3z"}})])
          )
        }
      }
    