
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
            children.concat([_c('path',{attrs:{"d":"M1.75 24C.785 24 0 23.215 0 22.25V1.75C0 .785.785 0 1.75 0h20.5C23.215 0 24 .785 24 1.75v20.5c0 .965-.785 1.75-1.75 1.75H1.75zm-.25-1.75c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25v-5h-21v5zm21-6.5v-7.5h-6v7.5h6zm-7.5 0v-7.5H9v7.5h6zm-7.5 0v-7.5h-6v7.5h6zm15-9v-5a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v5h21z"}})])
          )
        }
      }
    