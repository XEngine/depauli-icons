
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
            children.concat([_c('path',{attrs:{"d":"M14.25 24a.75.75 0 01-.75-.75V21h-3v2.25a.75.75 0 01-1.5 0V21H5.75A2.754 2.754 0 013 18.25v-4H.75a.75.75 0 010-1.5H3v-3H.75a.75.75 0 010-1.5H3v-2.5A2.754 2.754 0 015.75 3H9V.75a.75.75 0 011.5 0V3h3V.75a.75.75 0 011.5 0V3h3.25A2.754 2.754 0 0121 5.75v2.5h2.25a.75.75 0 010 1.5H21v3h2.25a.75.75 0 010 1.5H21v4A2.754 2.754 0 0118.25 21H15v2.25a.75.75 0 01-.75.75zm4-4.5c.689 0 1.25-.561 1.25-1.25v-4h-2.12a.75.75 0 010-1.5h2.12v-3h-2.12a.75.75 0 010-1.5h2.12v-2.5c0-.689-.561-1.25-1.25-1.25H15v2.12a.75.75 0 01-1.5 0V4.5h-3v2.12a.75.75 0 01-1.5 0V4.5H5.75c-.689 0-1.25.561-1.25 1.25v2.5h2.12a.75.75 0 010 1.5H4.5v3h2.12a.75.75 0 010 1.5H4.5v4c0 .689.561 1.25 1.25 1.25H9v-2.12a.75.75 0 011.5 0v2.12h3v-2.12a.75.75 0 011.5 0v2.12h3.25z"}})])
          )
        }
      }
    