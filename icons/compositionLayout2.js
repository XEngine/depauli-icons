
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
            children.concat([_c('path',{attrs:{"d":"M1.75 24C.785 24 0 23.215 0 22.25V1.75C0 .785.785 0 1.75 0h20.5C23.215 0 24 .785 24 1.75v20.5c0 .965-.785 1.75-1.75 1.75H1.75zm20.5-1.5a.25.25 0 00.25-.25V16.5h-9.75v6h9.5zM1.5 22.25c0 .138.112.25.25.25h9.5v-6H1.5v5.75zm21-7.25V9h-21v6h21zm0-7.5V1.75a.25.25 0 00-.25-.25h-9.5v6h9.75zm-11.25 0v-6h-9.5a.25.25 0 00-.25.25V7.5h9.75z"}})])
          )
        }
      }
    