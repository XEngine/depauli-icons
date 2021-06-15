
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
            children.concat([_c('path',{attrs:{"d":"M1.75 24C.785 24 0 23.215 0 22.25V1.75C0 .785.785 0 1.75 0h20.5C23.215 0 24 .785 24 1.75v20.5c0 .965-.785 1.75-1.75 1.75H1.75zm20.5-1.5a.25.25 0 00.25-.25V19.5h-3v3h2.75zm-4.25 0v-3h-3v3h3zm-4.5 0v-3h-3v3h3zm-4.5 0v-3H6v3h3zm-7.5-.25c0 .138.112.25.25.25H4.5v-3h-3v2.75zm21-4.25v-3h-3v3h3zM18 18V6H6v12h12zM4.5 18v-3h-3v3h3zm18-4.5v-3h-3v3h3zm-18 0v-3h-3v3h3zm18-4.5V6h-3v3h3zm-18 0V6h-3v3h3zm18-4.5V1.75a.25.25 0 00-.25-.25H19.5v3h3zm-4.5 0v-3h-3v3h3zm-4.5 0v-3h-3v3h3zM9 4.5v-3H6v3h3zm-4.5 0v-3H1.75a.25.25 0 00-.25.25V4.5h3z"}}),_c('path',{attrs:{"d":"M14.25 15.75c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM8.25 11.25a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l2.25-2.25c.141-.142.33-.22.53-.22s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53l-2.25 2.25a.743.743 0 01-.53.22z"}})])
          )
        }
      }
    