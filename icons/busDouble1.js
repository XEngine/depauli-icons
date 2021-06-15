
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
            children.concat([_c('path',{attrs:{"d":"M18.75 23.963c-.96 0-1.808-.615-2.121-1.5H7.372a2.26 2.26 0 01-2.121 1.5 2.253 2.253 0 01-2.139-1.554A3.736 3.736 0 010 18.713a3.754 3.754 0 013.75-3.75h.75V2.713a2.754 2.754 0 012.75-2.75h15c.965 0 1.75.785 1.75 1.75v14l-.001.03v4.47a2.252 2.252 0 01-2.25 2.25h-.877a2.26 2.26 0 01-2.122 1.5zm0-3a.75.75 0 10.749.767v-.036a.75.75 0 00-.749-.731zm-13.5 0a.75.75 0 100 1.5.75.75 0 000-1.5zm16.499 0a.75.75 0 00.75-.75v-3.75H3.749a2.252 2.252 0 00-2.25 2.25c0 1.024.695 1.908 1.661 2.169a2.265 2.265 0 012.09-1.419c.96 0 1.808.615 2.121 1.5h9.257c.314-.885 1.162-1.5 2.121-1.5s1.808.615 2.121 1.5h.879zm.751-6v-1.5H6v1.5h16.5zm0-3v-3h-3v3h3zm-4.5 0v-3h-3v3h3zm-4.5 0v-3h-3v3h3zm-4.5 0v-3H6v3h3zm13.5-4.5v-1.5H6v1.5h16.5zm0-3v-2.75a.25.25 0 00-.25-.25H19.5v3h3zm-4.5 0v-3h-3v3h3zm-4.5 0v-3h-3v3h3zm-4.5 0v-3H7.25c-.689 0-1.25.561-1.25 1.25v1.75h3z"}}),_c('path',{attrs:{"d":"M8.25 19.463a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5z"}})])
          )
        }
      }
    