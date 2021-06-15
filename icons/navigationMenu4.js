
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24.003A2.252 2.252 0 010 21.753v-19.5A2.252 2.252 0 012.25.003h19.5A2.252 2.252 0 0124 2.253v19.5a2.252 2.252 0 01-2.25 2.25H2.25zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-19.5a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M6.75 8.253a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H6.75zM6.75 12.753a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H6.75zM6.75 17.253a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H6.75z"}})])
          )
        }
      }
    