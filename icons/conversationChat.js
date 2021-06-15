
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
            children.concat([_c('path',{attrs:{"d":"M5.25 13.5a.75.75 0 01-.75-.75V9H2.25A2.252 2.252 0 010 6.75v-4.5A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v4.5A2.252 2.252 0 0121.75 9H10.061l-4.28 4.28a.747.747 0 01-.531.22zm-3-12a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 01.75.75v2.689l3.22-3.22a.746.746 0 01.53-.219h12a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M18.75 24a.743.743 0 01-.53-.22l-4.28-4.28H2.25A2.252 2.252 0 010 17.25v-4.5a2.252 2.252 0 012.25-2.25.75.75 0 010 1.5.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h12c.198 0 .391.08.53.22L18 21.44v-2.69a.75.75 0 01.75-.75h3a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-10.5a.75.75 0 010-1.5h10.5A2.252 2.252 0 0124 12.75v4.5a2.252 2.252 0 01-2.25 2.25H19.5v3.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    