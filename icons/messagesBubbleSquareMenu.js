
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24a.747.747 0 01-.75-.75V19.5H2.25A2.252 2.252 0 010 17.25v-15A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v15a2.252 2.252 0 01-2.25 2.25H11.5l-5.8 4.35a.753.753 0 01-.45.15zm-3-22.5a.75.75 0 00-.75.75v15c0 .414.336.75.75.75h3a.75.75 0 01.75.75v3l4.8-3.6a.753.753 0 01.45-.15h10.5a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M9.75 8.625a.75.75 0 010-1.5h9a.75.75 0 010 1.5h-9zM9.75 13.125a.75.75 0 010-1.5h9a.75.75 0 010 1.5h-9zM5.25 9c-.62 0-1.125-.505-1.125-1.125a1.12 1.12 0 011.086-1.122l.041-.001.046.002a1.117 1.117 0 011.077 1.122C6.375 8.495 5.87 9 5.25 9zM5.25 13.5c-.62 0-1.125-.505-1.125-1.125 0-.599.468-1.09 1.067-1.121l.03-.003-.026.002a.51.51 0 01.054-.004 1.127 1.127 0 010 2.251z"}})])
          )
        }
      }
    