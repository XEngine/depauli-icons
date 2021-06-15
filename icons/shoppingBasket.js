
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
            children.concat([_c('path',{attrs:{"d":"M5.06 21.375a2.191 2.191 0 01-2.116-1.727L.809 10.662a2.203 2.203 0 01.232-1.675 2.22 2.22 0 011.855-1.111h1.255l4.276-4.988a.746.746 0 011.057-.081.747.747 0 01.081 1.056L6.126 7.875h11.739l-3.439-4.012a.75.75 0 011.139-.976l4.275 4.988h1.229a2.24 2.24 0 011.582.709 2.217 2.217 0 01.525 2.099l-2.133 8.979a2.177 2.177 0 01-2.099 1.713H5.06zm-2.13-12a.73.73 0 00-.667.922l2.143 9.019a.696.696 0 00.667.559h13.855a.689.689 0 00.654-.545l2.141-9.014a.731.731 0 00-.679-.942L2.93 9.375z"}})])
          )
        }
      }
    