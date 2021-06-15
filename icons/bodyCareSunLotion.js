
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
            children.concat([_c('path',{attrs:{"d":"M15.75 2.999a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM19.993 4.757a.751.751 0 01-.531-1.28l1.06-1.061a.748.748 0 011.061-.001.752.752 0 01.001 1.061l-1.06 1.061a.745.745 0 01-.531.22zM21.75 8.999a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM21.053 14.303a.747.747 0 01-.531-.22l-1.06-1.061a.752.752 0 010-1.061c.142-.142.33-.219.531-.219s.389.078.531.22l1.06 1.061a.752.752 0 010 1.061.752.752 0 01-.531.219zM15.75 16.499a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM3.75 24.001A3.754 3.754 0 010 20.251v-7.5a3.743 3.743 0 013-3.673v-.827a2.252 2.252 0 012.25-2.25H6v-1.5H3.493c-.602 0-1.167.234-1.592.659l-.62.621a.748.748 0 01-1.061.001.751.751 0 01-.001-1.061l.621-.622a3.727 3.727 0 012.651-1.098H10.5a.75.75 0 010 1.5h-3v1.5h.75a2.252 2.252 0 012.25 2.25v.827c1.732.351 3 1.874 3 3.673v7.5a3.754 3.754 0 01-3.75 3.75h-6zm0-13.5a2.252 2.252 0 00-2.25 2.25v7.5a2.252 2.252 0 002.25 2.25h6a2.252 2.252 0 002.25-2.25v-7.5a2.252 2.252 0 00-2.25-2.25h-6zM9 9.001v-.75a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v.75H9z"}}),_c('path',{attrs:{"d":"M15.75 12.75a.75.75 0 010-1.5c.939 0 1.836-.449 2.4-1.2.48-.64.682-1.43.568-2.224S18.19 6.33 17.55 5.85a2.965 2.965 0 00-2.224-.57 2.981 2.981 0 00-1.976 1.17.753.753 0 01-1.049.15.751.751 0 01-.151-1.05 4.47 4.47 0 012.964-1.755 4.49 4.49 0 013.336.855 4.505 4.505 0 01.9 6.3 4.523 4.523 0 01-3.6 1.8z"}})])
          )
        }
      }
    