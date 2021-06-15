
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
            children.concat([_c('path',{attrs:{"d":"M2.25 19.5A2.252 2.252 0 010 17.25v-15A2.252 2.252 0 012.25 0h15a2.252 2.252 0 012.25 2.25v15a2.252 2.252 0 01-2.25 2.25h-15zm0-18a.75.75 0 00-.75.75v15c0 .414.336.75.75.75h15a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75h-15z"}}),_c('path',{attrs:{"d":"M6.75 24a2.252 2.252 0 01-2.25-2.25.75.75 0 011.5 0c0 .414.336.75.75.75h15a.75.75 0 00.75-.75v-15c0-.414-.336-.75-.75-.75a.75.75 0 010-1.5A2.252 2.252 0 0124 6.75v15A2.252 2.252 0 0121.75 24h-15z"}})])
          )
        }
      }
    