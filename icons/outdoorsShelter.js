
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
            children.concat([_c('path',{attrs:{"d":"M3.75 23.999a2.252 2.252 0 01-2.25-2.25V11.727l-.433.202a.754.754 0 01-.997-.362.751.751 0 01.362-.997l22.5-10.5a.746.746 0 01.997.362.751.751 0 01-.362.997L3 11.027v10.722c0 .414.336.75.75.75h19.5a.75.75 0 010 1.5H3.75z"}})])
          )
        }
      }
    