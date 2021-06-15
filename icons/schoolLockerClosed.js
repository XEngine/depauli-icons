
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
            children.concat([_c('path',{attrs:{"d":"M4 24c-.965 0-1.75-.785-1.75-1.75V1.75C2.25.785 3.035 0 4 0h16c.965 0 1.75.785 1.75 1.75v20.5c0 .965-.785 1.75-1.75 1.75H4zm16-1.5a.25.25 0 00.25-.25V1.75A.25.25 0 0020 1.5h-7.25v21H20zM4 1.5a.25.25 0 00-.25.25v20.5c0 .138.112.25.25.25h7.25v-21H4z"}}),_c('path',{attrs:{"d":"M6 4.5A.75.75 0 016 3h3a.75.75 0 010 1.5H6zM6 7.5A.75.75 0 016 6h3a.75.75 0 010 1.5H6zM6 18a.75.75 0 010-1.5h3A.75.75 0 019 18H6zM6 21a.75.75 0 010-1.5h3A.75.75 0 019 21H6zM15 4.5A.75.75 0 0115 3h3a.75.75 0 010 1.5h-3zM15 7.5A.75.75 0 0115 6h3a.75.75 0 010 1.5h-3zM15 18a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM15 21a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM6 12.75a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0V12a.75.75 0 01-.75.75zM15 12.75a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0V12a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    