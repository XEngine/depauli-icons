
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
            children.concat([_c('path',{attrs:{"d":"M1.75 24C.785 24 0 23.215 0 22.25V1.75C0 .785.785 0 1.75 0h20.5C23.215 0 24 .785 24 1.75v20.5c0 .965-.785 1.75-1.75 1.75H1.75zm0-22.5a.25.25 0 00-.25.25v20.5c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75z"}}),_c('path',{attrs:{"d":"M7.883 15.734a4.872 4.872 0 01-4.867-4.867A4.876 4.876 0 017.5 6.015V4.714A1.718 1.718 0 019.213 3h4.823c.944.001 1.713.77 1.714 1.713v4.823a1.718 1.718 0 01-1.713 1.714h-1.302a4.876 4.876 0 01-4.852 4.484zm0-8.234a3.37 3.37 0 00-3.367 3.367c0 1.856 1.51 3.367 3.367 3.367s3.367-1.51 3.367-3.367A3.37 3.37 0 007.883 7.5zm6.153 2.25a.214.214 0 00.214-.215V4.714a.214.214 0 00-.215-.214H9.214A.215.215 0 009 4.715v1.42a4.861 4.861 0 013.615 3.615h1.421zM3.75 19.5a.75.75 0 010-1.5h9a.75.75 0 010 1.5h-9zM18.25 21c-.965 0-1.75-.785-1.75-1.75v-2.317l-2.534-2.112a.744.744 0 01-.267-.508.75.75 0 011.227-.644l2.146 1.788A1.746 1.746 0 0118.25 15h1c.965 0 1.75.785 1.75 1.75v2.5c0 .965-.785 1.75-1.75 1.75h-1zm0-4.5a.25.25 0 00-.25.25v2.5c0 .138.112.25.25.25h1a.25.25 0 00.25-.25v-2.5a.25.25 0 00-.25-.25h-1zM18 5.25a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5H18zM18 8.25a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5H18z"}})])
          )
        }
      }
    