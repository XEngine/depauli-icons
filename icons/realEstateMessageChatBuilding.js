
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
            children.concat([_c('path',{attrs:{"d":"M5.25 21a.747.747 0 01-.75-.75V16.5H2.25A2.252 2.252 0 010 14.25v-12A2.252 2.252 0 012.25 0h15a2.252 2.252 0 012.25 2.25v12a2.252 2.252 0 01-2.25 2.25H11.5l-5.8 4.35a.753.753 0 01-.45.15zm-3-19.5a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h3a.75.75 0 01.75.75v3l4.8-3.6a.753.753 0 01.45-.15h6a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75h-15z"}}),_c('path',{attrs:{"d":"M20.25 24a.743.743 0 01-.53-.22l-4.28-4.28H12a.75.75 0 010-1.5h3.75c.198 0 .391.08.53.22l3.22 3.22v-2.69a.75.75 0 01.75-.75h1.5a.75.75 0 00.75-.75v-7.5a.75.75 0 00-.75-.75H21a.75.75 0 010-1.5h.75A2.252 2.252 0 0124 9.75v7.5a2.252 2.252 0 01-2.25 2.25H21v3.75a.75.75 0 01-.75.75zM5.25 13.5a.75.75 0 010-1.5H6V4.5C6 3.673 6.673 3 7.5 3H12c.827 0 1.5.673 1.5 1.5V12h.75a.75.75 0 010 1.5h-9zM12 12v-1.5H9.75a.75.75 0 010-1.5H12V7.5H9.75a.75.75 0 010-1.5H12V4.5H7.5V12H12z"}})])
          )
        }
      }
    