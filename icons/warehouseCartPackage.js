
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
            children.concat([_c('path',{attrs:{"d":"M20.256 24a.743.743 0 01-.53-.22l-1.061-1.061a.748.748 0 00-.53-.219H8.254a3.747 3.747 0 01-6.748-2.25 3.754 3.754 0 013.75-3.75c.251 0 .502.026.75.078V2.25a.75.75 0 00-.75-.75h-1.5a.75.75 0 010-1.5h1.5a2.252 2.252 0 012.25 2.25v15.002A3.744 3.744 0 018.928 21h9.206c.602 0 1.166.234 1.591.658l1.061 1.062a.744.744 0 010 1.06.749.749 0 01-.53.22zm-15-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25S6.496 18 5.256 18z"}}),_c('path',{attrs:{"d":"M12.756 19.5a2.252 2.252 0 01-2.25-2.25v-7.5a2.252 2.252 0 012.25-2.25h7.5a2.252 2.252 0 012.25 2.25v7.5a2.252 2.252 0 01-2.25 2.25h-7.5zm0-10.5a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75v-7.5a.75.75 0 00-.75-.75h-7.5z"}}),_c('path',{attrs:{"d":"M17.256 16.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    