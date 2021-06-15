
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
            children.concat([_c('path',{attrs:{"d":"M12.01 24.003a.75.75 0 01-.75-.75v-11.69l-3.22 3.22a.744.744 0 01-1.06 0 .752.752 0 010-1.061l4.5-4.5a.74.74 0 01.245-.163l.025-.009a.737.737 0 01.521.001l.02.007c.097.04.179.095.25.166l4.499 4.499a.752.752 0 01-.53 1.281.743.743 0 01-.53-.22l-3.22-3.22v11.689a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M19.51 16.503a.75.75 0 010-1.5h1.5a.75.75 0 00.75-.75v-8.25H2.26v8.25c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5h-1.5a2.252 2.252 0 01-2.25-2.25v-12A2.252 2.252 0 013.01.003h18a2.252 2.252 0 012.25 2.25v12a2.252 2.252 0 01-2.25 2.25h-1.5zm2.25-12v-2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.25h19.5z"}})])
          )
        }
      }
    