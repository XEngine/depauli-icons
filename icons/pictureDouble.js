
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
            children.concat([_c('path',{attrs:{"d":"M8.25 22.5A2.252 2.252 0 016 20.25v-9A2.252 2.252 0 018.25 9h13.5A2.252 2.252 0 0124 11.25v9a2.252 2.252 0 01-2.25 2.25H8.25zm0-12a.75.75 0 00-.75.75v9c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75H8.25z"}}),_c('path',{attrs:{"d":"M2.25 15A2.252 2.252 0 010 12.75v-9A2.252 2.252 0 012.25 1.5h13.5A2.252 2.252 0 0118 3.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v9c0 .414.336.75.75.75h1.5c.414 0 .75.336.75.75S2.25 15 2.25 15z"}})])
          )
        }
      }
    