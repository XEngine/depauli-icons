
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
            children.concat([_c('path',{attrs:{"d":"M.75 21a.75.75 0 01-.75-.75v-5c0-.965.785-1.75 1.75-1.75H6V8.935C3.871 8.573 2.25 6.688 2.25 4.5c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5c0 2.188-1.621 4.073-3.75 4.435V13.5h6v-1.25c0-.965.785-1.75 1.75-1.75h4c.965 0 1.75.785 1.75 1.75v1.25h1.25c.965 0 1.75.785 1.75 1.75v5a.75.75 0 01-.75.75H.75zm21.75-1.5v-4.25a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v4.25h21zm-3-6v-1.25a.25.25 0 00-.25-.25h-4a.25.25 0 00-.25.25v1.25h4.5zM6.75 1.5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zM2.25 24a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM15.75 24a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    