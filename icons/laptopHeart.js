
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
            children.concat([_c('path',{attrs:{"d":"M2.728 21.75a1.979 1.979 0 01-1.98-1.966 1.986 1.986 0 01.183-.838l1.327-4.083V4.5a2.252 2.252 0 012.25-2.25.75.75 0 11-.001 1.5.75.75 0 00-.75.75v9.75h16.494V4.5c0-.414-.336-.75-.75-.75a.75.75 0 010-1.5 2.252 2.252 0 012.25 2.25v10.381l1.319 4.069c.211.458.238.973.077 1.453-.168.5-.521.905-.993 1.14a1.99 1.99 0 01-.88.207H2.728zm-.387-2.293a.733.733 0 01-.043.104.477.477 0 00.424.689h18.551a.479.479 0 00.427-.688.628.628 0 01-.042-.104l-1.203-3.708H3.546l-1.205 3.707z"}}),_c('path',{attrs:{"d":"M11.251 18.751a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM12.001 12.75a.751.751 0 01-.541-.231L7.077 7.95a3.34 3.34 0 01-.617-3.847 3.332 3.332 0 012.996-1.848 3.343 3.343 0 012.359.978l.186.186.186-.186a3.323 3.323 0 012.364-.977 3.343 3.343 0 012.365 5.706l-4.372 4.557a.76.76 0 01-.543.231zM9.455 3.754c-.705 0-1.338.39-1.653 1.018a1.849 1.849 0 00.347 2.129l3.852 4.015 3.842-4.005a1.848 1.848 0 00.012-2.616 1.833 1.833 0 00-1.305-.54 1.83 1.83 0 00-1.303.538l-.716.716a.744.744 0 01-1.06 0l-.716-.716a1.847 1.847 0 00-1.3-.539z"}})])
          )
        }
      }
    