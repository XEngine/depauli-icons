
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
            children.concat([_c('path',{attrs:{"d":"M15.25 22.5c-.965 0-1.75-.785-1.75-1.75V18h-3v2.75c0 .965-.785 1.75-1.75 1.75h-7C.785 22.5 0 21.715 0 20.75V6c0-3.109 1.883-4.5 3.75-4.5h.75a.75.75 0 010 1.5h-.75C2.404 3 1.5 4.206 1.5 6v7.518c.082-.012.166-.018.25-.018h7c.965 0 1.75.785 1.75 1.75v1.25h3v-1.25c0-.965.785-1.75 1.75-1.75h7c.084 0 .168.006.25.018V5.25A2.252 2.252 0 0020.25 3h-.75a.75.75 0 010-1.5h.75A3.754 3.754 0 0124 5.25v15.5c0 .965-.785 1.75-1.75 1.75h-7zm0-7.5a.25.25 0 00-.25.25v5.5c0 .138.112.25.25.25h7a.25.25 0 00.25-.25v-5.5a.25.25 0 00-.25-.25h-7zm-13.5 0a.25.25 0 00-.25.25v5.5c0 .138.112.25.25.25h7a.25.25 0 00.25-.25v-5.5a.25.25 0 00-.25-.25h-7z"}})])
          )
        }
      }
    