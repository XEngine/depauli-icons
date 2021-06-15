
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
            children.concat([_c('path',{attrs:{"d":"M.75 18.75a.75.75 0 010-1.5h3.838L5.842 7.221A2.253 2.253 0 018.074 5.25H15a.75.75 0 010 1.5H8.074a.751.751 0 00-.744.657l-.668 5.343h7.858a7.783 7.783 0 012.069-5.287 6.137 6.137 0 015.193-2.067.754.754 0 01.677.668 7.736 7.736 0 01-2.026 6.079c-.427.49-.933.908-1.504 1.242a.75.75 0 01-.741.864H6.475l-.375 3h11.8l-.078-.622a.746.746 0 01.742-.843c.379 0 .699.282.746.657l.101.808h3.838a.75.75 0 010 1.5H.75zM21.001 6.875a4.656 4.656 0 00-3.298 1.591 6.3 6.3 0 00-1.684 4.265 4.66 4.66 0 003.298-1.591 6.294 6.294 0 001.684-4.265z"}})])
          )
        }
      }
    