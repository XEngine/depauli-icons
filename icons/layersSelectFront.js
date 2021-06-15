
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
            children.concat([_c('path',{attrs:{"d":"M.75 10.5A.75.75 0 010 9.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM.75 15a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM.75 19.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM14.25 24a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM9.75 24a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM5.25 24a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM2.25 24A2.252 2.252 0 010 21.75a.75.75 0 011.5 0c0 .414.336.75.75.75a.75.75 0 010 1.5zM6.25 19.5c-.965 0-1.75-.785-1.75-1.75v-16C4.5.785 5.285 0 6.25 0h16C23.215 0 24 .785 24 1.75v16c0 .965-.785 1.75-1.75 1.75h-16zm0-18a.25.25 0 00-.25.25v16c0 .138.112.25.25.25h16a.25.25 0 00.25-.25v-16a.25.25 0 00-.25-.25h-16z"}})])
          )
        }
      }
    