
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
            children.concat([_c('path',{attrs:{"d":"M9 23.25a.75.75 0 010-1.5c1.241 0 2.25-1.009 2.25-2.25S10.241 17.25 9 17.25H6.75A6.758 6.758 0 010 10.5a.75.75 0 01.75-.75h21A2.252 2.252 0 0124 12v3a2.252 2.252 0 01-2.25 2.25H21c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25a.75.75 0 010 1.5H9zm9-1.5a3.728 3.728 0 01-.75-2.25A3.754 3.754 0 0121 15.75h.75a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75H9v4.5a3.754 3.754 0 013.75 3.75c0 .823-.267 1.607-.75 2.25h6zM1.553 11.25a5.264 5.264 0 005.197 4.5h.75v-4.5H1.553zM15.25 8.25c-.965 0-1.75-.785-1.75-1.75V5.25h-9a.75.75 0 010-1.5h9V2.5c0-.965.785-1.75 1.75-1.75h4c.965 0 1.75.785 1.75 1.75v4c0 .965-.785 1.75-1.75 1.75h-4zm0-6a.25.25 0 00-.25.25v4c0 .138.112.25.25.25h4a.25.25 0 00.25-.25v-4a.25.25 0 00-.25-.25h-4z"}})])
          )
        }
      }
    