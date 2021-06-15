
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
            children.concat([_c('path',{attrs:{"d":"M12 23.999c-.4 0-.776-.156-1.059-.438L.22 12.841A.745.745 0 010 12.31c0-.2.078-.389.22-.53a.744.744 0 011.06 0L12 22.499 22.72 11.78a.744.744 0 011.06 0 .744.744 0 010 1.06L13.06 23.56a1.487 1.487 0 01-1.06.439z"}}),_c('path',{attrs:{"d":"M12 12.749c-.4 0-.776-.156-1.059-.438L.22 1.591A.745.745 0 010 1.06C0 .86.078.671.22.53.361.388.55.31.75.31s.389.078.53.22L12 11.249 22.72.53a.744.744 0 011.06 0 .744.744 0 010 1.06L13.06 12.31a1.491 1.491 0 01-1.059.44L12 12.749z"}})])
          )
        }
      }
    