
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
            children.concat([_c('path',{attrs:{"d":"M4.75 22.5c-.965 0-1.75-.785-1.75-1.75v-8H.75a.75.75 0 010-1.5H3v-8c0-.965.785-1.75 1.75-1.75h4c.965 0 1.75.785 1.75 1.75v8h3v-5c0-.965.785-1.75 1.75-1.75h4c.965 0 1.75.785 1.75 1.75v5h2.25a.75.75 0 010 1.5H21v5c0 .965-.785 1.75-1.75 1.75h-4c-.965 0-1.75-.785-1.75-1.75v-5h-3v8c0 .965-.785 1.75-1.75 1.75h-4zm0-19.5a.25.25 0 00-.25.25v17.5c0 .138.112.25.25.25h4a.25.25 0 00.25-.25V3.25A.25.25 0 008.75 3h-4zm10.5 3a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h4a.25.25 0 00.25-.25V6.25a.25.25 0 00-.25-.25h-4z"}})])
          )
        }
      }
    