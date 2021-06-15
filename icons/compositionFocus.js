
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
            children.concat([_c('path',{attrs:{"d":"M1.75 24C.785 24 0 23.215 0 22.25V1.75C0 .785.785 0 1.75 0h20.5C23.215 0 24 .785 24 1.75v20.5c0 .965-.785 1.75-1.75 1.75H1.75zm20.5-1.5a.25.25 0 00.25-.25v-9.5h-2.626a7.875 7.875 0 01-7.124 7.124V22.5h9.5zM1.5 22.25c0 .138.112.25.25.25h9.5v-2.626a7.875 7.875 0 01-7.124-7.124H1.5v9.5zM12 5.591c-3.534 0-6.409 2.875-6.409 6.409S8.466 18.409 12 18.409s6.409-2.875 6.409-6.409S15.534 5.591 12 5.591zm10.5 5.659v-9.5a.25.25 0 00-.25-.25h-9.5v2.626a7.876 7.876 0 017.124 7.124H22.5zm-18.374 0a7.876 7.876 0 017.124-7.124V1.5h-9.5a.25.25 0 00-.25.25v9.5h2.626z"}})])
          )
        }
      }
    