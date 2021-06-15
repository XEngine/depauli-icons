
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
            children.concat([_c('path',{attrs:{"d":"M18.75 21.75c-.96 0-1.808-.615-2.121-1.5H7.371c-.314.885-1.162 1.5-2.121 1.5s-1.808-.615-2.121-1.5H2.25A2.252 2.252 0 010 18V6a3.754 3.754 0 013.75-3.75h16.5A3.754 3.754 0 0124 6a3.756 3.756 0 01-3.085 3.691l2.509 3.513A3.07 3.07 0 0124 15v3a2.252 2.252 0 01-2.25 2.25h-.879a2.258 2.258 0 01-2.121 1.5zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zm-13.5 0a.75.75 0 100 1.5.75.75 0 000-1.5zm16.5 0a.75.75 0 00.75-.75v-2.25H15v3h1.629c.314-.885 1.162-1.5 2.121-1.5s1.808.615 2.121 1.5h.879zm-8.25 0v-6h-12V18c0 .414.336.75.75.75h.879c.314-.885 1.162-1.5 2.121-1.5s1.808.615 2.121 1.5H13.5zm8.812-4.5a1.728 1.728 0 00-.107-.174l-3.09-4.326H15v4.5h7.312zm-8.812-3V9a.75.75 0 01.75-.75h6c1.241 0 2.25-1.009 2.25-2.25s-1.009-2.25-2.25-2.25H3.75A2.252 2.252 0 001.5 6v5.25h12z"}}),_c('path',{attrs:{"d":"M18.75 6.75a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM3.75 6.75a.75.75 0 010-1.5h9a.75.75 0 010 1.5h-9z"}})])
          )
        }
      }
    