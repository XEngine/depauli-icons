
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
            children.concat([_c('path',{attrs:{"d":"M21.75 24a.75.75 0 01-.75-.75V19.5h-2.25a.75.75 0 010-1.5h3a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75H16.5v7.5c0 .827-.673 1.5-1.5 1.5H9c-.827 0-1.5-.673-1.5-1.5V15H2.25a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75h3a.75.75 0 010 1.5H3v3.75a.75.75 0 01-1.5 0v-3.879A2.258 2.258 0 010 17.25v-1.5c0-.96.615-1.808 1.5-2.121V11.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25h12V9.75a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3.879A2.26 2.26 0 0124 15.75v1.5c0 .96-.615 1.808-1.5 2.121v3.879a.75.75 0 01-.75.75zM9 22.5h6V21l-6 1.5zm6-3V15H9v4.5h6zm6-6v-3h-1.5v3H21zm-16.5 0V12H3v1.5h1.5z"}}),_c('path',{attrs:{"d":"M12 12c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6zm0-10.5C9.519 1.5 7.5 3.519 7.5 6s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5z"}})])
          )
        }
      }
    