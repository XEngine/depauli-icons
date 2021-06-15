
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
            children.concat([_c('path',{attrs:{"d":"M2.25 21A2.252 2.252 0 010 18.75v-15A2.252 2.252 0 012.25 1.5H4.5V.75a.75.75 0 011.5 0v.75h9V.75a.75.75 0 011.5 0v.75h2.25A2.252 2.252 0 0121 3.75v9.879c0 .317-.066.625-.196.916l-.011.023a2.232 2.232 0 01-.451.65l-5.123 5.122a2.238 2.238 0 01-.66.456l-.024.011a2.196 2.196 0 01-.906.193H2.25zm0-18a.75.75 0 00-.75.75v15c0 .414.336.75.75.75H13.5v-3.75a2.252 2.252 0 012.25-2.25h3.75V3.75a.75.75 0 00-.75-.75H16.5v.75a.75.75 0 01-1.5 0V3H6v.75a.75.75 0 01-1.5 0V3H2.25zm13.5 12a.75.75 0 00-.75.75v2.689L18.439 15H15.75z"}}),_c('path',{attrs:{"d":"M6.75 24a.75.75 0 010-1.5h15a.75.75 0 00.75-.75V10.5a.75.75 0 011.5 0v11.25A2.252 2.252 0 0121.75 24h-15z"}})])
          )
        }
      }
    