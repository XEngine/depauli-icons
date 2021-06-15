
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
            children.concat([_c('path',{attrs:{"d":"M2.5 23.25c-.965 0-1.75-.785-1.75-1.75v-19c0-.965.785-1.75 1.75-1.75h19c.965 0 1.75.785 1.75 1.75v19c0 .965-.785 1.75-1.75 1.75h-19zm0-21a.25.25 0 00-.25.25v19c0 .138.112.25.25.25h19a.25.25 0 00.25-.25v-19a.25.25 0 00-.25-.25h-19z"}}),_c('path',{attrs:{"d":"M16.5 20.25a.75.75 0 01-.75-.75v-2.25h-3v2.25a.75.75 0 01-1.5 0v-2.25h-3v2.25a.75.75 0 01-1.5 0v-2.25H4.5a.75.75 0 010-1.5h2.25v-3H4.5a.75.75 0 010-1.5h2.25v-3H4.5a.75.75 0 010-1.5h2.25V4.5a.75.75 0 011.5 0v2.25h3V4.5a.75.75 0 011.5 0v2.25h3V4.5a.75.75 0 011.5 0v2.25h2.25a.75.75 0 010 1.5h-2.25v3h2.25a.75.75 0 010 1.5h-2.25v3h2.25a.75.75 0 010 1.5h-2.25v2.25a.75.75 0 01-.75.75zm-.75-4.5v-3h-3v3h3zm-4.5 0v-3h-3v3h3zm4.5-4.5v-3h-3v3h3zm-4.5 0v-3h-3v3h3z"}})])
          )
        }
      }
    