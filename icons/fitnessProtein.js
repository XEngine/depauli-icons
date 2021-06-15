
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24a3.754 3.754 0 01-3.75-3.75v-12A3.754 3.754 0 015.25 4.5H6V1.75C6 .785 6.785 0 7.75 0h8.5C17.215 0 18 .785 18 1.75V4.5h.75a3.754 3.754 0 013.75 3.75v12A3.754 3.754 0 0118.75 24H5.25zM3 20.25a2.252 2.252 0 002.25 2.25h13.5A2.252 2.252 0 0021 20.25v-.75H3v.75zM21 18v-7.5H3V18h18zm0-9v-.75A2.252 2.252 0 0018.75 6H5.25A2.252 2.252 0 003 8.25V9h18zm-4.5-4.5V1.75a.25.25 0 00-.25-.25H15v3h1.5zm-3 0v-3h-3v3h3zM9 4.5v-3H7.75a.25.25 0 00-.25.25V4.5H9z"}}),_c('path',{attrs:{"d":"M15 16.5a.75.75 0 01-.75-.75V15h-4.5v.75a.75.75 0 01-1.5 0V15H7.5a.75.75 0 010-1.5h.75v-.75a.75.75 0 011.5 0v.75h4.5v-.75a.75.75 0 011.5 0v.75h.75a.75.75 0 010 1.5h-.75v.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    