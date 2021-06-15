
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
            children.concat([_c('path',{attrs:{"d":"M4.5 24.001a.75.75 0 010-1.5h6.75v-6.017c-3.933-.178-6.75-1.721-6.75-3.733v-9c0-2.138 3.224-3.75 7.5-3.75s7.5 1.612 7.5 3.75v9c0 2.012-2.817 3.554-6.75 3.733v6.017h6.75a.75.75 0 010 1.5h-15zM6 12.751c0 .939 2.283 2.25 6 2.25s6-1.311 6-2.25V10.55c-1.379.907-3.585 1.451-6 1.451s-4.621-.544-6-1.451v2.201zm0-4.5c0 .94 2.283 2.25 6 2.25s6-1.31 6-2.25V6.05c-1.379.907-3.585 1.451-6 1.451S7.379 6.957 6 6.05v2.201zm6-6.75c-3.717 0-6 1.31-6 2.25s2.283 2.25 6 2.25 6-1.31 6-2.25-2.283-2.25-6-2.25zM22.875 24c-.62 0-1.125-.505-1.125-1.125a1.127 1.127 0 011.923-.794A1.126 1.126 0 0122.875 24zM1.125 24C.505 24 0 23.495 0 22.875a1.127 1.127 0 011.923-.794A1.126 1.126 0 011.125 24z"}})])
          )
        }
      }
    