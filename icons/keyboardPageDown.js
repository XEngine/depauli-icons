
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
            children.concat([_c('path',{attrs:{"d":"M11.75 23.997a.755.755 0 01-.26-.047l-.022-.008a.732.732 0 01-.249-.165l-3.749-3.75a.744.744 0 010-1.06.744.744 0 011.06 0l2.47 2.47v-6.439H7.25a.75.75 0 010-1.5H11v-1.5H7.25a.75.75 0 010-1.5H11V.748a.75.75 0 011.5 0v9.75h3.75a.75.75 0 010 1.5H12.5v1.5h3.75a.75.75 0 010 1.5H12.5v6.439l2.47-2.47a.744.744 0 011.06 0 .749.749 0 010 1.06l-3.75 3.75a.763.763 0 01-.246.164l-.027.01a.746.746 0 01-.257.046z"}})])
          )
        }
      }
    