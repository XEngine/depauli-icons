
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
            children.concat([_c('path',{attrs:{"d":"M16.5 21.75a.75.75 0 01-.75-.75V9.75H13.5a.75.75 0 01-.75-.75V7.5a.75.75 0 00-1.5 0V9a.75.75 0 01-.75.75H8.25V21a.75.75 0 01-.75.75H.75A.75.75 0 010 21v-4c0-.689.561-1.25 1.25-1.25h1V12.5c0-.689.561-1.25 1.25-1.25h.25V9.5c0-.689.561-1.25 1.25-1.25h1.75v-4.5H6a.75.75 0 010-1.5h12a.75.75 0 010 1.5h-.75v4.5H19c.689 0 1.25.561 1.25 1.25v1.75h.25c.689 0 1.25.561 1.25 1.25v3.25h1c.689 0 1.25.561 1.25 1.25v4a.75.75 0 01-.75.75H16.5zm6-1.5v-3h-5.25v3h5.25zm-15.75 0v-3H1.5v3h5.25zm13.5-4.5v-3h-3v3h3zm-13.5 0v-3h-3v3h3zm12-4.5v-1.5h-1.5v1.5h1.5zm-12 0v-1.5h-1.5v1.5h1.5zm9-3v-4.5h-7.5v4.5h1.5V7.5A2.252 2.252 0 0112 5.25a2.252 2.252 0 012.25 2.25v.75h1.5z"}}),_c('path',{attrs:{"d":"M10.5 12.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM10.5 15.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM10.5 18.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM10.5 21.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    