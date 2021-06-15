
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
            children.concat([_c('path',{attrs:{"d":"M12 24a.75.75 0 01-.75-.75V21h-8c-.965 0-1.75-.785-1.75-1.75v-4c0-.965.785-1.75 1.75-1.75h8v-3h-5c-.965 0-1.75-.785-1.75-1.75v-4C4.5 3.785 5.285 3 6.25 3h5V.75a.75.75 0 011.5 0V3h5c.965 0 1.75.785 1.75 1.75v4c0 .965-.785 1.75-1.75 1.75h-5v3h8c.965 0 1.75.785 1.75 1.75v4c0 .965-.785 1.75-1.75 1.75h-8v2.25A.75.75 0 0112 24zm-8.75-9a.25.25 0 00-.25.25v4c0 .138.112.25.25.25h17.5a.25.25 0 00.25-.25v-4a.25.25 0 00-.25-.25H3.25zm3-10.5a.25.25 0 00-.25.25v4c0 .138.112.25.25.25h11.5a.25.25 0 00.25-.25v-4a.25.25 0 00-.25-.25H6.25z"}})])
          )
        }
      }
    