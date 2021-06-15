
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
            children.concat([_c('path',{attrs:{"d":"M4.5 24a2.252 2.252 0 01-2.25-2.25V6H.751a.75.75 0 010-1.5H2.25v-.75A3.754 3.754 0 016 0h11.25c.023 0 .046.002.069.005a3.746 3.746 0 012.411.933.75.75 0 11-.992 1.125 2.248 2.248 0 00-3.176.201A2.248 2.248 0 0015 3.75v.75h4.629A2.26 2.26 0 0121.751 3c1.241 0 2.25 1.009 2.25 2.25s-1.009 2.25-2.25 2.25c-.96 0-1.808-.615-2.121-1.5h-4.629v10.5h3.75a.75.75 0 00.75-.75V9a.75.75 0 011.5 0v6.75a2.252 2.252 0 01-2.25 2.25h-3.75v3.75a2.252 2.252 0 01-2.25 2.25H4.5zm-.75-2.25c0 .414.336.75.75.75h8.251a.75.75 0 00.75-.75V18H3.75v3.75zm9.751-5.25V15H3.75v1.5h9.751zm0-3V3.75c0-.815.265-1.603.751-2.25H6a2.252 2.252 0 00-2.25 2.25v1.474a.235.235 0 01.001.026l-.001.03v8.22h9.751zm8.25-9a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    