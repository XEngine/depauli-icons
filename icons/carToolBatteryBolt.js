
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
            children.concat([_c('path',{attrs:{"d":"M1.75 21.5C.785 21.5 0 20.715 0 19.75v-13C0 5.785.785 5 1.75 5H3V3.75C3 2.785 3.785 2 4.75 2h2.5C8.215 2 9 2.785 9 3.75V5h6V3.75c0-.965.785-1.75 1.75-1.75h2.5c.965 0 1.75.785 1.75 1.75V5h1.25c.965 0 1.75.785 1.75 1.75v13c0 .965-.785 1.75-1.75 1.75H1.75zm0-15a.25.25 0 00-.25.25v13c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25v-13a.25.25 0 00-.25-.25H1.75zM19.5 5V3.75a.25.25 0 00-.25-.25h-2.5a.25.25 0 00-.25.25V5h3zm-12 0V3.75a.25.25 0 00-.25-.25h-2.5a.25.25 0 00-.25.25V5h3z"}}),_c('path',{attrs:{"d":"M11.25 18.5a.752.752 0 01-.671-1.085L12.287 14H9.75a.746.746 0 01-.638-.355.745.745 0 01-.033-.73l2.25-4.5a.749.749 0 011.006-.336.75.75 0 01.336 1.006L10.964 12.5H13.5c.258 0 .502.136.638.355.138.224.15.496.033.73l-2.25 4.5a.746.746 0 01-.671.415z"}})])
          )
        }
      }
    