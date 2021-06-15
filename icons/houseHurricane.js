
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
            children.concat([_c('path',{attrs:{"d":"M13.501 24a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v3.75h3v-3.75a2.252 2.252 0 012.25-2.25h1.5a2.252 2.252 0 012.25 2.25v3.75h3v-3.75a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5z"}}),_c('path',{attrs:{"d":"M21.001 18.75a.743.743 0 01-.53-.22l-8.689-8.689a.75.75 0 00-1.062 0L2.031 18.53a.744.744 0 01-1.06 0 .752.752 0 010-1.061L9.66 8.78a2.23 2.23 0 011.591-.658c.601 0 1.166.233 1.59.657l8.69 8.69a.752.752 0 01-.53 1.281zM12.751 1.5a.75.75 0 010-1.5h9.75a.75.75 0 010 1.5h-9.75zM10.501 4.5a.75.75 0 010-1.5h9.75a.75.75 0 010 1.5h-9.75zM15.001 7.5a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM18.001 10.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM18.751 13.5a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5h-2.25z"}})])
          )
        }
      }
    