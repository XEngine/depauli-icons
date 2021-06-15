
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
            children.concat([_c('path',{attrs:{"d":"M10.932 23.069a1.49 1.49 0 01-.542-.102 1.492 1.492 0 01-.831-.792L1.132 3.103A1.502 1.502 0 012.505 1c.209 0 .412.043.605.128l19.073 8.424c.42.186.727.547.843.99.102.387.047.791-.155 1.138a1.493 1.493 0 01-.914.695L14.8 14.258a.751.751 0 00-.533.535l-1.884 7.158a1.495 1.495 0 01-1.451 1.118zm0-1.5l1.884-7.158a2.253 2.253 0 011.602-1.603l7.158-1.884L2.506 2.5l8.426 19.069z"}})])
          )
        }
      }
    