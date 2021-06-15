
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
            children.concat([_c('path',{attrs:{"d":"M3.75 23.999a2.252 2.252 0 01-2.25-2.25V11.727l-.433.202a.754.754 0 01-.997-.362.751.751 0 01.362-.997l22.5-10.5a.746.746 0 01.997.362.751.751 0 01-.362.997L3 11.027v10.722c0 .414.336.75.75.75h19.5a.75.75 0 010 1.5H3.75z"}}),_c('path',{attrs:{"d":"M18.75 20.999a.744.744 0 01-.696-.472l-1.011-2.528h-5.584l-1.011 2.528a.745.745 0 01-.975.418.747.747 0 01-.417-.975l.789-1.971H7.5a.75.75 0 010-1.5h2.942l1.2-3H9.75a.75.75 0 010-1.5h9a.75.75 0 010 1.5h-1.892l1.2 3H21a.75.75 0 010 1.5h-2.342l.789 1.972a.747.747 0 01-.418.975.76.76 0 01-.279.053zm-2.308-4.5l-1.2-3h-1.984l-1.2 3h4.384z"}})])
          )
        }
      }
    