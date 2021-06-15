
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
            children.concat([_c('path',{attrs:{"d":"M12.09 18.891a1.501 1.501 0 01-1.312-.77l-1.749-3.149-3.149-1.749a1.498 1.498 0 01-.63-1.945 1.49 1.49 0 01.846-.776l8.612-3.132a1.488 1.488 0 011.024 0 1.502 1.502 0 01.898 1.922l-3.133 8.612a1.502 1.502 0 01-1.407.987zm-5.482-6.979l3.336 1.852a.743.743 0 01.291.292l1.853 3.336L15.22 8.78l-8.612 3.132zM15.22 8.78z"}}),_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}})])
          )
        }
      }
    