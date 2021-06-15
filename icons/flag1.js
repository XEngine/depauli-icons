
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v.75h21c.401 0 .778.157 1.061.44a1.498 1.498 0 01.06 2.055l-4.005 4.503a.75.75 0 000 .997L23.617 14a1.503 1.503 0 01-.126 2.118 1.498 1.498 0 01-.994.378H1.5v6.753A.751.751 0 01.75 24zm21.745-9.003l-4.001-4.505a2.25 2.25 0 01.001-2.991L22.499 3h-21v11.997h20.996z"}})])
          )
        }
      }
    