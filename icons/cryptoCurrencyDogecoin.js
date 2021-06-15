
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M9 18l-.031-.001-.037.001H6.375a.75.75 0 010-1.5H8.25v-9H6.375a.75.75 0 010-1.5h2.557l.032.001L9 6h4c3.246.081 5.822 2.776 5.75 6.008.072 3.215-2.499 5.91-5.731 5.992H9zm4-1.5c2.397-.061 4.307-2.071 4.25-4.482v-.027A4.388 4.388 0 0012.986 7.5H9.75v9H13z"}})])
          )
        }
      }
    