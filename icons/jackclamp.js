
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
            children.concat([_c('path',{attrs:{"d":"M14.25 11.25a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM14.25 8.25a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM14.25 14.25a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM14.25 5.25a.75.75 0 01-.75-.75V2.25h-3V4.5a.75.75 0 01-.75.75h-7.5C1.009 5.25 0 4.241 0 3S1.009.75 2.25.75h15a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3zm2.25-1.5v-1.5H15v1.5h1.5zM2.25 2.25a.75.75 0 000 1.5H9v-1.5H2.25zM21.75 23.25c-.96 0-1.808-.615-2.121-1.5H18v.75a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-.75H9.75a.75.75 0 010-1.5h3.75v-3H2.25C1.009 17.25 0 16.241 0 15s1.009-2.25 2.25-2.25h7.5a.75.75 0 01.75.75v2.25h6.75a.75.75 0 01.75.75v3.75h1.629a2.26 2.26 0 012.121-1.5c1.241 0 2.25 1.009 2.25 2.25s-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zm-5.25 1.5v-4.5H15v4.5h1.5zm-14.25-7.5a.75.75 0 000 1.5H9v-1.5H2.25z"}})])
          )
        }
      }
    