
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
            children.concat([_c('path',{attrs:{"d":"M2.25 21A2.252 2.252 0 010 18.75V2.25A2.252 2.252 0 012.25 0h16.5A2.252 2.252 0 0121 2.25v8.379a2.256 2.256 0 01-.659 1.59l-8.122 8.122a2.246 2.246 0 01-1.59.659H2.25zm0-19.5a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h8.25v-6.75a2.252 2.252 0 012.25-2.25h6.75V2.25a.75.75 0 00-.75-.75H2.25zM12.75 12a.75.75 0 00-.75.75v5.689L18.439 12H12.75z"}}),_c('path',{attrs:{"d":"M6.75 24a.75.75 0 010-1.5h15a.75.75 0 00.75-.75V10.5a.75.75 0 011.5 0v11.25A2.252 2.252 0 0121.75 24h-15z"}})])
          )
        }
      }
    