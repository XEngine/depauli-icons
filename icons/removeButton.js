
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
            children.concat([_c('path',{attrs:{"d":"M2.25 19.499A2.252 2.252 0 010 17.249v-10.5a2.252 2.252 0 012.25-2.25h19.5A2.252 2.252 0 0124 6.749v10.5a2.252 2.252 0 01-2.25 2.25H2.25zm0-13.5a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-10.5a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M20.25 15.374a.743.743 0 01-.53-.22l-2.095-2.095-2.095 2.095a.744.744 0 01-1.06 0 .752.752 0 010-1.061l2.095-2.095-2.095-2.094c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l2.095 2.095 2.095-2.095a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-2.095 2.095 2.095 2.095a.752.752 0 010 1.061.746.746 0 01-.53.219z"}})])
          )
        }
      }
    