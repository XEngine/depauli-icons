
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
            children.concat([_c('path',{attrs:{"d":"M6 21a.75.75 0 010-1.5h1.615l.5-3H3.75A3.754 3.754 0 010 12.75v-9A3.754 3.754 0 013.75 0h16.5A3.754 3.754 0 0124 3.75V9a.75.75 0 01-1.5 0V3.75a2.252 2.252 0 00-2.25-2.25H3.75A2.252 2.252 0 001.5 3.75V12h12.956a.75.75 0 010 1.5H1.632A2.262 2.262 0 003.75 15h7.5a.75.75 0 010 1.5H9.635l-.502 3.012A.75.75 0 019 21H6z"}}),_c('path',{attrs:{"d":"M11.25 24a.743.743 0 01-.53-.22.745.745 0 01-.205-.677l.75-3.75a.748.748 0 01.205-.384l7.631-7.631a2.845 2.845 0 012.026-.839c.765 0 1.485.298 2.026.839a2.868 2.868 0 01.008 4.062l-7.631 7.63a.744.744 0 01-.384.205l-3.749.75a.733.733 0 01-.147.015zm.956-1.706l2.424-.485 7.47-7.47c.258-.258.4-.601.4-.965s-.142-.707-.4-.965a1.376 1.376 0 00-1.94-.008l-7.47 7.47-.484 2.423z"}})])
          )
        }
      }
    