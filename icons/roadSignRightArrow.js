
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
            children.concat([_c('path',{attrs:{"d":"M5.5 24c-.965 0-1.75-.785-1.75-1.75V1.75C3.75.785 4.535 0 5.5 0h13c.965 0 1.75.785 1.75 1.75v20.5c0 .965-.785 1.75-1.75 1.75h-13zm-.25-1.75c0 .138.112.25.25.25h13a.25.25 0 00.25-.25v-8.868l-13.5 8.775v.093zm0-1.882L18.124 12 5.25 3.632v16.736zm13.5-9.75V1.75a.25.25 0 00-.25-.25h-13a.25.25 0 00-.25.25v.093l13.5 8.775z"}})])
          )
        }
      }
    