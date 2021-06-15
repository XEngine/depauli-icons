
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
            children.concat([_c('path',{attrs:{"d":"M21.75 23.998a.75.75 0 01-.75-.75v-.828a3.652 3.652 0 01-.75.078H3.75c-.251 0-.502-.026-.75-.078v.828a.75.75 0 01-1.5 0v-1.502A3.747 3.747 0 010 18.748v-15a3.754 3.754 0 013.75-3.75h16.5A3.754 3.754 0 0124 3.748v15c0 1.183-.557 2.29-1.5 2.998v1.502a.75.75 0 01-.75.75zm-20.118-4.5a2.262 2.262 0 002.118 1.5h16.5c.96 0 1.805-.621 2.118-1.5H1.632zm20.868-1.5v-3H21v3h1.5zm-3 0v-3H18v3h1.5zm-3 0v-3H15v3h1.5zm-3 0v-3.75a.75.75 0 01.75-.75h8.25v-1.5h-21v6H3v-3.75a.75.75 0 01.75-.75h6a.75.75 0 01.75.75v3.75h3zm-4.5 0v-3H7.5v3H9zm-3 0v-3H4.5v3H6zm16.5-7.5v-1.5h-21v1.5h21zm0-3v-3.75a2.252 2.252 0 00-2.25-2.25H3.75a2.252 2.252 0 00-2.25 2.25v3.75h3v-3.75a.75.75 0 01.75-.75h9a.75.75 0 01.75.75v3.75h1.5v-3.75a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3.75h1.5zm-3 0v-3H18v3h1.5zm-6 0v-3H12v3h1.5zm-3 0v-3H9v3h1.5zm-3 0v-3H6v3h1.5z"}})])
          )
        }
      }
    