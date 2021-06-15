
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5H3v-8.25h-.75a.75.75 0 010-1.5h.539l-.375-1.5H2.25a.75.75 0 010-1.5h4.73a5.22 5.22 0 014.269-3.694V.75A.752.752 0 0112 0h4.5a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3.75v1.56a5.228 5.228 0 014.27 3.691h4.73a.75.75 0 010 1.5h-.165l-.375 1.5h.54a.75.75 0 010 1.5H21v8.25h2.25a.75.75 0 010 1.499H.75zm18.75-1.5v-8.25h-15v8.25h3v-4.25c0-.965.785-1.75 1.75-1.75h5.5c.965 0 1.75.785 1.75 1.75v4.25h3zm-4.5 0v-4.25a.25.25 0 00-.25-.25h-2v4.5H15zm-3.75 0V18h-2a.25.25 0 00-.25.25v4.25h2.25zm8.415-9.75l.375-1.5h-3.615a.749.749 0 01-.74-.627 3.71 3.71 0 00-1.513-2.425 3.7 3.7 0 00-2.785-.645 3.734 3.734 0 00-3.07 3.07.749.749 0 01-.74.627H3.961l.375 1.5h15.329zM15.75 3V1.5h-3V3h3z"}})])
          )
        }
      }
    