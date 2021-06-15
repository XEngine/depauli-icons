
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
            children.concat([_c('path',{attrs:{"d":"M11.999 18c-3.308 0-6-2.692-6-6 0-4.669 4.615-10.5 6-10.5s6 5.831 6 10.5c0 3.308-2.692 6-6 6zm0-14.922c-.928.736-4.5 5.026-4.5 8.922 0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5c0-3.896-3.572-8.186-4.5-8.922z"}}),_c('path',{attrs:{"d":"M11.999 22.5C5.585 22.5.748 20.304.748 17.391a3.269 3.269 0 011.243-2.408.755.755 0 01.461-.159.75.75 0 01.462 1.341 1.742 1.742 0 00-.667 1.27C2.248 19.466 7.396 21 11.999 21c6.278 0 9.75-2.134 9.75-3.609a1.742 1.742 0 00-.666-1.226c-.158-.123-.258-.301-.282-.5s.03-.395.154-.553a.746.746 0 011.053-.129 3.243 3.243 0 011.24 2.363c.001 1.474-1.198 2.797-3.374 3.748-2.076.907-4.872 1.406-7.875 1.406z"}}),_c('path',{attrs:{"d":"M11.998 15a3.003 3.003 0 01-2.999-3 .75.75 0 011.5 0c0 .827.673 1.5 1.499 1.5a.75.75 0 010 1.5z"}})])
          )
        }
      }
    