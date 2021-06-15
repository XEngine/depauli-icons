
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
            children.concat([_c('path',{attrs:{"d":"M11.26 24.003a.755.755 0 01-.26-.047l-.022-.008a.732.732 0 01-.249-.165L6.23 19.284a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l3.22 3.22v-10.19a.75.75 0 011.5 0v10.189l3.22-3.22a.744.744 0 011.06 0 .752.752 0 010 1.061l-4.5 4.5a.763.763 0 01-.246.164l-.026.01a.747.747 0 01-.258.046z"}}),_c('path',{attrs:{"d":"M17.26 16.503a.75.75 0 010-1.5h3a.75.75 0 00.75-.75v-8.25H1.51v8.25c0 .414.336.75.75.75h3a.75.75 0 010 1.5h-3a2.252 2.252 0 01-2.25-2.25v-12A2.252 2.252 0 012.26.003h18a2.252 2.252 0 012.25 2.25v12a2.252 2.252 0 01-2.25 2.25h-3zm3.75-12v-2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.25h19.5z"}})])
          )
        }
      }
    