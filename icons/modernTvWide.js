
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
            children.concat([_c('path',{attrs:{"d":"M22.5 22.125a.754.754 0 01-.643-.364l-2.031-3.386H4.175l-2.031 3.386a.753.753 0 01-1.029.257.749.749 0 01-.257-1.029l1.568-2.614H1.75c-.965 0-1.75-.785-1.75-1.75v-13c0-.965.785-1.75 1.75-1.75h20.5c.965 0 1.75.785 1.75 1.75v13c0 .965-.785 1.75-1.75 1.75h-.675l1.568 2.614a.748.748 0 01-.643 1.136zM1.75 3.375a.25.25 0 00-.25.25v13c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25v-13a.25.25 0 00-.25-.25H1.75z"}})])
          )
        }
      }
    