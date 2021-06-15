
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
            children.concat([_c('path',{attrs:{"d":"M11.999 23.947c-.26 0-.517-.068-.742-.196a20.946 20.946 0 01-5.143-4.208c-2.564-2.922-3.864-6.2-3.864-9.744 0-5.376 4.374-9.75 9.75-9.75s9.75 4.374 9.75 9.75c0 3.544-1.3 6.822-3.865 9.744a21.008 21.008 0 01-5.142 4.208 1.512 1.512 0 01-.744.196zM12 1.549c-4.549 0-8.25 3.701-8.25 8.25 0 1.863.595 8.282 8.25 12.649 7.655-4.372 8.25-10.786 8.25-12.649 0-4.549-3.701-8.25-8.25-8.25z"}}),_c('path',{attrs:{"d":"M11.25 14.301a3.754 3.754 0 01-3.75-3.75v-3a.75.75 0 01.75-.75h7.125C16.823 6.801 18 7.979 18 9.426s-1.177 2.625-2.625 2.625h-.692a3.758 3.758 0 01-3.433 2.25zM9 10.551a2.252 2.252 0 002.25 2.25 2.252 2.252 0 002.25-2.25v-2.25H9v2.25zm6.375 0c.62 0 1.125-.505 1.125-1.125s-.505-1.125-1.125-1.125H15v2.25h.375z"}})])
          )
        }
      }
    