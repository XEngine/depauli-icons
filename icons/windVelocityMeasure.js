
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v6.849l3.667-2.444A2.225 2.225 0 016.75 4.5h12A5.256 5.256 0 0124 9.75 5.256 5.256 0 0118.75 15h-12a2.23 2.23 0 01-1.585-.656L1.5 11.901V23.25a.75.75 0 01-.75.75zM18 13.5V6h-3v7.5h3zm-4.5 0V6h-3v7.5h3zM6.75 6a.75.75 0 00-.75.75v6c0 .414.336.75.75.75H9V6H6.75zm12.75 7.422c1.712-.352 3-1.891 3-3.672 0-1.781-1.288-3.32-3-3.672v7.344zm-15-1.324V7.401l-3 2v.697l3 2z"}})])
          )
        }
      }
    