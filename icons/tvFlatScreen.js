
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
            children.concat([_c('path',{attrs:{"d":"M7.5 22.375a.75.75 0 010-1.5h3.75v-2.25h-9.5c-.965 0-1.75-.785-1.75-1.75v-13c0-.965.785-1.75 1.75-1.75h20.5c.965 0 1.75.785 1.75 1.75v13c0 .965-.785 1.75-1.75 1.75h-9.5v2.25h3.75a.75.75 0 010 1.5h-9zM1.75 3.625a.25.25 0 00-.25.25v13c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25v-13a.25.25 0 00-.25-.25H1.75z"}})])
          )
        }
      }
    