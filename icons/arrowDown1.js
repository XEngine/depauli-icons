
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
            children.concat([_c('path',{attrs:{"d":"M12 18.999c-.4 0-.776-.156-1.059-.438L.22 7.841A.745.745 0 010 7.31c0-.2.078-.389.22-.53a.744.744 0 011.06 0L12 17.499 22.72 6.78a.744.744 0 011.06 0 .744.744 0 010 1.06L13.06 18.56a1.487 1.487 0 01-1.06.439z"}})])
          )
        }
      }
    