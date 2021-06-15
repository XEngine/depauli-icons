
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
            children.concat([_c('path',{attrs:{"d":"M11.25 9a.732.732 0 01-.55-.243.72.72 0 01-.151-.249l-.012-.037a.657.657 0 01-.037-.221v-4.5a.75.75 0 011.5 0v2.805l6.996-6.36a.75.75 0 111.008 1.11L13.19 7.5h2.56a.75.75 0 010 1.5h-4.5z"}}),_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75v-12c0-.827.673-1.5 1.5-1.5h6c.827 0 1.5.673 1.5 1.5v3h1.75c.689 0 1.25.561 1.25 1.25v7h3v-8.25a.75.75 0 011.5 0v8.25h2.25V9a.75.75 0 011.5 0v13.5h2.25V3.75a.75.75 0 011.5 0v19.5a.75.75 0 01-.75.75H.75zm9.75-1.5v-6.75H6.75v6.75h3.75zm-5.25 0v-7c0-.689.561-1.25 1.25-1.25h1v-3h-6v3H3a.75.75 0 010 1.5H1.5v1.5H3a.75.75 0 010 1.5H1.5v3.75h3.75z"}})])
          )
        }
      }
    