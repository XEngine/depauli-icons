
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
            children.concat([_c('path',{attrs:{"d":"M10.604 20.855a2.231 2.231 0 01-1.588-.659l-2.977-2.977a.744.744 0 010-1.06.744.744 0 011.06 0l2.977 2.977a.742.742 0 00.636.212.748.748 0 00.495-.292L22.65 3.798a.755.755 0 011.05-.151.75.75 0 01.151 1.05L12.408 19.954a2.23 2.23 0 01-1.482.877 2.171 2.171 0 01-.322.024zM4.927 20.96a2.237 2.237 0 01-1.573-.641L.36 17.33a.75.75 0 011.059-1.062l2.977 2.972c.143.14.334.218.534.218a.74.74 0 00.533-.224.748.748 0 011.061-.011.746.746 0 01.012 1.061 2.232 2.232 0 01-1.609.676z"}}),_c('path',{attrs:{"d":"M9.289 15.958a.75.75 0 01-.599-1.2l8.14-10.854a.755.755 0 011.05-.15c.331.249.398.72.15 1.05L9.89 15.658a.755.755 0 01-.601.3z"}})])
          )
        }
      }
    