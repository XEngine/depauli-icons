
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
            children.concat([_c('path',{attrs:{"d":"M20.25 24a.743.743 0 01-.53-.22l-4.28-4.28h-4.19A2.252 2.252 0 019 17.25v-7.5a2.252 2.252 0 012.25-2.25h10.5A2.252 2.252 0 0124 9.75v7.5a2.252 2.252 0 01-2.25 2.25H21v3.75a.75.75 0 01-.75.75zm-9-15a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h4.5c.198 0 .391.08.53.22l3.22 3.22v-2.69a.75.75 0 01.75-.75h1.5a.75.75 0 00.75-.75v-7.5a.75.75 0 00-.75-.75h-10.5z"}}),_c('path',{attrs:{"d":"M3.75 16.5a.75.75 0 01-.75-.75V12h-.75A2.252 2.252 0 010 9.75v-7.5A2.252 2.252 0 012.25 0h10.5A2.252 2.252 0 0115 2.25v3a.75.75 0 01-1.5 0v-3a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h1.5a.75.75 0 01.75.75v2.689l1.72-1.72a.746.746 0 011.06.001.752.752 0 010 1.061l-3 3a.746.746 0 01-.53.219z"}})])
          )
        }
      }
    