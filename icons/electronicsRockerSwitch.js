
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v19.5A2.252 2.252 0 0121.75 24H2.25zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M8.25 21A2.252 2.252 0 016 18.75V5.25A2.252 2.252 0 018.25 3H18c.601 0 1.166.235 1.591.66s.658.99.658 1.591c0 .286-.054.567-.16.834l-2.125 5.31v7.355a2.252 2.252 0 01-2.25 2.25H8.25zm7.464-1.5a.75.75 0 00.75-.75V12H12v7.5h3.714zM8.25 4.5a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h2.25v-8.25a.73.73 0 01.056-.284l2.586-6.467H8.25zm8.456 6l1.99-4.972a.755.755 0 00-.166-.809A.748.748 0 0018 4.5h-3.242l-2.4 6h4.348z"}}),_c('circle',{attrs:{"cx":"3.75","cy":"3.75","r":"1.125"}}),_c('circle',{attrs:{"cx":"3.75","cy":"20.25","r":"1.125"}}),_c('circle',{attrs:{"cx":"20.25","cy":"20.25","r":"1.125"}})])
          )
        }
      }
    