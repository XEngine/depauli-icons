
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
            children.concat([_c('path',{attrs:{"d":"M1.75 24C.785 24 0 23.215 0 22.25V1.75C0 .785.785 0 1.75 0h20.5C23.215 0 24 .785 24 1.75v20.5c0 .965-.785 1.75-1.75 1.75l-5.75.001L1.75 24zm20.5-1.5a.25.25 0 00.25-.25v-9.5h-21v9.5c0 .138.112.25.25.25h2V15a.75.75 0 01.75-.75H12a.75.75 0 01.75.75v7.5h2.652l-2.601-6.661a.75.75 0 01.426-.971l3.493-1.364a.751.751 0 01.972.426l3 7.685a.755.755 0 01-.266.886h1.824zm-11 0v-6.75H9v6.75h2.25zm-3.75 0v-6.75H5.25v6.75H7.5zm9.426-.221l2.096-.818-2.455-6.288-2.096.818 2.455 6.288zM22.5 11.25v-9.5a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v9.5H12v-7.5a.75.75 0 01.75-.75h3.75a.75.75 0 01.75.75v1.5h3A.75.75 0 0121 6v5.25h1.5zm-3 0v-4.5h-2.25v4.5h2.25zm-3.75 0V4.5H13.5v6.75h2.25z"}})])
          )
        }
      }
    