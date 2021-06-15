
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
            children.concat([_c('path',{attrs:{"d":"M2.25 6.003A2.252 2.252 0 010 3.753v-1.5A2.252 2.252 0 012.25.003h19.5A2.252 2.252 0 0124 2.253v1.5a2.252 2.252 0 01-2.25 2.25H2.25zm0-4.5a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75H2.25zM2.25 15.003A2.252 2.252 0 010 12.753v-1.5a2.252 2.252 0 012.25-2.25h19.5a2.252 2.252 0 012.25 2.25v1.5a2.252 2.252 0 01-2.25 2.25H2.25zm0-4.5a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75H2.25zM2.25 24.003A2.252 2.252 0 010 21.753v-1.5a2.252 2.252 0 012.25-2.25h19.5a2.252 2.252 0 012.25 2.25v1.5a2.252 2.252 0 01-2.25 2.25H2.25zm0-4.5a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75H2.25z"}})])
          )
        }
      }
    