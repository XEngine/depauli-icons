
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
            children.concat([_c('path',{attrs:{"d":"M23.249 24a.743.743 0 01-.53-.22l-3.293-3.293a5.99 5.99 0 01-3.677 1.263c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6a5.992 5.992 0 01-1.263 3.677l3.293 3.293a.752.752 0 010 1.061.744.744 0 01-.53.219zm-7.5-12.75c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.018-4.5-4.5-4.5z"}}),_c('path',{attrs:{"d":"M4.499 16.5a4.505 4.505 0 01-4.5-4.5.75.75 0 01.75-.75h1.5v-9c0-1.241 1.01-2.25 2.25-2.25h15a2.252 2.252 0 012.25 2.25v6a.75.75 0 01-1.5 0v-6a.75.75 0 00-.75-.75h-15a.75.75 0 00-.75.75v9h4.5a.75.75 0 010 1.5H1.594A2.996 2.996 0 004.499 15h2.25a.75.75 0 010 1.5h-2.25z"}})])
          )
        }
      }
    