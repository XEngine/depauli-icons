
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
            children.concat([_c('path',{attrs:{"d":"M1.75 18.254c-.965 0-1.75-.785-1.75-1.75v-10c0-.965.785-1.75 1.75-1.75h20.5c.965 0 1.75.785 1.75 1.75v10c0 .965-.785 1.75-1.75 1.75H1.75zm20.5-1.5a.25.25 0 00.25-.25v-10a.25.25 0 00-.25-.25h-4.097l4.162 4.756a.751.751 0 010 .988l-4.162 4.756h4.097zm-6.09 0l4.594-5.25-4.594-5.25h-4.757l4.162 4.756a.751.751 0 010 .988l-4.162 4.756h4.757zm-6.75 0l4.594-5.25-4.594-5.25H4.653l4.162 4.756a.754.754 0 010 .988l-4.162 4.756H9.41zm-7.66-10.5a.25.25 0 00-.25.25v10c0 .138.112.25.25.25h.91l4.594-5.25-4.594-5.25h-.91z"}})])
          )
        }
      }
    