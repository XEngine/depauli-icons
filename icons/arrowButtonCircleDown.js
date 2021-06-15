
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M12.002 18.751a1.56 1.56 0 01-1.334-.739L5.85 9.508a1.277 1.277 0 01.008-1.283c.261-.447.768-.725 1.324-.725h9.636c.554 0 1.062.277 1.323.723.234.399.239.878.013 1.281l-4.824 8.509-.033.054a1.567 1.567 0 01-1.295.684zm-.052-1.52c.01.01.022.016.036.018h.01a.073.073 0 00.044-.011L16.716 9H7.287l4.663 8.231z"}})])
          )
        }
      }
    