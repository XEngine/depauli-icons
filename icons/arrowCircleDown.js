
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M12.002 17.353c-.516 0-.99-.259-1.267-.693L6.117 9.403c-.107-.169-.143-.37-.099-.566a.745.745 0 01.732-.587c.258 0 .495.13.633.347L12 15.853l4.617-7.256a.748.748 0 011.035-.23.751.751 0 01.23 1.036l-4.617 7.256a1.494 1.494 0 01-1.263.694z"}})])
          )
        }
      }
    