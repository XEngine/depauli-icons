
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
            children.concat([_c('path',{attrs:{"d":"M2.25 19.499A2.252 2.252 0 010 17.249v-10.5a2.252 2.252 0 012.25-2.25h19.5A2.252 2.252 0 0124 6.749v10.5a2.252 2.252 0 01-2.25 2.25H2.25zm0-13.5a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-10.5a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M16.5 14.999a.743.743 0 01-.53-.22l-3-3c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l2.374 2.374 3.235-4.53a.752.752 0 011.046-.175c.337.241.415.71.175 1.047l-3.75 5.25a.753.753 0 01-.549.312l-.061.002z"}})])
          )
        }
      }
    