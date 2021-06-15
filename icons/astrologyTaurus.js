
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
            children.concat([_c('path',{attrs:{"d":"M11.83 24c-5.207 0-9.443-4.236-9.443-9.443 0-3.746 2.28-7.161 5.661-8.65a10.513 10.513 0 01-5.437-4.802.751.751 0 011.321-.711 8.951 8.951 0 007.895 4.719h.003A8.95 8.95 0 0019.725.394a.752.752 0 011.017-.305.751.751 0 01.305 1.016 10.505 10.505 0 01-5.436 4.801c3.381 1.489 5.661 4.904 5.661 8.65C21.273 19.764 17.037 24 11.83 24zm0-17.386c-4.38 0-7.943 3.563-7.943 7.943 0 4.38 3.563 7.943 7.943 7.943 4.38 0 7.943-3.563 7.943-7.943 0-4.38-3.563-7.943-7.943-7.943z"}})])
          )
        }
      }
    