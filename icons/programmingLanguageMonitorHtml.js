
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
            children.concat([_c('path',{attrs:{"d":"M6.75 24a.75.75 0 010-1.5h1.615l.5-3H2.25A2.252 2.252 0 010 17.25v-1.5A.75.75 0 01.75 15h22.5a.75.75 0 01.75.75v1.5a2.252 2.252 0 01-2.25 2.25h-6.615l.5 3h1.615a.75.75 0 010 1.5H6.75zm7.365-1.5l-.5-3h-3.229l-.5 3h4.229zM1.5 17.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-.75h-21v.75zM23.25 3c-.414 0-.75-.336-.75-.75s-.336-.75-.75-.75H2.25c-.414 0-.75.336-.75.75a.75.75 0 01-1.5 0A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25a.75.75 0 01-.75.75zM8.25 13.5a.75.75 0 01-.75-.75V6h-.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5H9v6.75a.75.75 0 01-.75.75zM3.75 13.5a.75.75 0 01-.75-.75V10.5H1.5v2.25a.75.75 0 01-1.5 0v-7.5a.75.75 0 011.5 0V9H3V5.25a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75zM21.75 13.5a2.252 2.252 0 01-2.25-2.25v-6a.75.75 0 011.5 0v6c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5h-1.5zM17.25 13.5a.75.75 0 01-.75-.75V7.958l-.857 1.428c-.134.224-.381.364-.643.364s-.509-.14-.643-.364L13.5 7.958v4.792a.75.75 0 01-1.5 0v-7.5a.752.752 0 01.75-.75c.262 0 .509.14.643.364L15 7.542l1.607-2.678a.753.753 0 01.844-.337c.323.09.549.387.549.723v7.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    