
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
            children.concat([_c('path',{attrs:{"d":"M5.25 21a.747.747 0 01-.75-.75V16.5H2.25A2.252 2.252 0 010 14.25v-12A2.252 2.252 0 012.25 0h16.5A2.252 2.252 0 0121 2.25v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h3a.75.75 0 01.75.75v3l1.8-1.35a.755.755 0 011.05.149.752.752 0 01-.15 1.051l-3 2.25a.753.753 0 01-.45.15z"}}),_c('path',{attrs:{"d":"M5.25 6a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H5.25zM5.25 10.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM20.25 24a.743.743 0 01-.53-.22l-4.28-4.28h-4.19a.75.75 0 01-.75-.75v-9a.75.75 0 01.75-.75h12a.75.75 0 01.75.75v9a.75.75 0 01-.75.75H21v3.75a.75.75 0 01-.75.75zm-4.5-6c.198 0 .391.08.53.22l3.22 3.22v-2.69a.75.75 0 01.75-.75h2.25v-7.5H12V18h3.75z"}}),_c('path',{attrs:{"d":"M14.25 13.5a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM14.25 16.5a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    