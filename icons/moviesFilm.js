
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v22.5a.75.75 0 01-.75.75zM23.25 24a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v22.5a.75.75 0 01-.75.75zM7.75 10.5C6.785 10.5 6 9.715 6 8.75v-7C6 .785 6.785 0 7.75 0h8.5C17.215 0 18 .785 18 1.75v7c0 .965-.785 1.75-1.75 1.75h-8.5zm0-9a.25.25 0 00-.25.25v7c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-7a.25.25 0 00-.25-.25h-8.5zM7.75 24C6.785 24 6 23.215 6 22.25v-7c0-.965.785-1.75 1.75-1.75h8.5c.965 0 1.75.785 1.75 1.75v7c0 .965-.785 1.75-1.75 1.75h-8.5zm0-9a.25.25 0 00-.25.25v7c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-7a.25.25 0 00-.25-.25h-8.5z"}}),_c('circle',{attrs:{"cx":"3.75","cy":"3","r":"1.125"}}),_c('circle',{attrs:{"cx":"3.75","cy":"9","r":"1.125"}}),_c('circle',{attrs:{"cx":"3.75","cy":"15","r":"1.125"}}),_c('circle',{attrs:{"cx":"3.75","cy":"21","r":"1.125"}}),_c('circle',{attrs:{"cx":"20.25","cy":"3","r":"1.125"}}),_c('circle',{attrs:{"cx":"20.25","cy":"9","r":"1.125"}}),_c('circle',{attrs:{"cx":"20.25","cy":"15","r":"1.125"}}),_c('circle',{attrs:{"cx":"20.25","cy":"21","r":"1.125"}})])
          )
        }
      }
    