
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
            children.concat([_c('path',{attrs:{"d":"M4.75 24C3.785 24 3 23.215 3 22.25v-8.5c0-.965.785-1.75 1.75-1.75h2.5c.965 0 1.75.785 1.75 1.75v8.5C9 23.215 8.215 24 7.25 24h-2.5zm0-10.5a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h2.5a.25.25 0 00.25-.25v-8.5a.25.25 0 00-.25-.25h-2.5zM16.75 24c-.965 0-1.75-.785-1.75-1.75v-8.5c0-.965.785-1.75 1.75-1.75h2.5c.965 0 1.75.785 1.75 1.75v8.5c0 .965-.785 1.75-1.75 1.75h-2.5zm0-10.5a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h2.5a.25.25 0 00.25-.25v-8.5a.25.25 0 00-.25-.25h-2.5z"}}),_c('path',{attrs:{"d":"M23.25 18.75a.75.75 0 01-.75-.75v-6c0-5.79-4.71-10.5-10.5-10.5S1.5 6.21 1.5 12v6A.75.75 0 010 18v-6C0 5.383 5.383 0 12 0s12 5.383 12 12v6a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    