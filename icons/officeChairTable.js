
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
            children.concat([_c('path',{attrs:{"d":"M.75 22.5a.75.75 0 01-.75-.75V8.25a.75.75 0 011.5 0v13.5a.75.75 0 01-.75.75zM23.25 22.5a.75.75 0 01-.75-.75V19.5h-6.25c-.689 0-1.25-.561-1.25-1.25v-7a.75.75 0 01.75-.75h6.75V9h-6.75a.75.75 0 010-1.5h6.75c.827 0 1.5.673 1.5 1.5v12.75a.75.75 0 01-.75.75zM22.5 18v-6h-6v6h6z"}}),_c('circle',{attrs:{"cx":"19.5","cy":"15","r":"1.125"}}),_c('path',{attrs:{"d":"M12.75 22.5a.75.75 0 01-.75-.75V16.5H4.5v5.25a.75.75 0 01-1.5 0v-15C3 3.855 5.355 1.5 8.25 1.5s5.25 2.355 5.25 5.25v15a.75.75 0 01-.75.75zM12 15V6.75C12 4.682 10.318 3 8.25 3S4.5 4.682 4.5 6.75V15H12z"}})])
          )
        }
      }
    