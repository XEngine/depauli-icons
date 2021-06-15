
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
            children.concat([_c('path',{attrs:{"d":"M20.25 24a.75.75 0 01-.75-.75v-.75h-9v.75a.75.75 0 01-1.5 0v-.75H7.75c-.965 0-1.75-.785-1.75-1.75v-8.5c0-.965.785-1.75 1.75-1.75h14.5c.965 0 1.75.785 1.75 1.75v8.5c0 .965-.785 1.75-1.75 1.75H21v.75a.75.75 0 01-.75.75zM7.75 12a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h14.5a.25.25 0 00.25-.25v-8.5a.25.25 0 00-.25-.25H7.75z"}}),_c('path',{attrs:{"d":"M12.75 15a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM9.75 9A2.252 2.252 0 017.5 6.75v-4.5a.75.75 0 00-.75-.75h-6a.75.75 0 010-1.5h6c.96 0 1.808.615 2.121 1.5H20.25a2.252 2.252 0 012.25 2.25v3A2.252 2.252 0 0120.25 9H9.75zm10.5-1.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75H18v4.5h2.25zm-3.75 0V3h-3v4.5h3zM9 6.75c0 .414.336.75.75.75H12V3H9v3.75z"}})])
          )
        }
      }
    