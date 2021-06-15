
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
            children.concat([_c('path',{attrs:{"d":"M20.25 24A2.252 2.252 0 0118 21.75v-15a2.252 2.252 0 012.25-2.25h1.5A2.252 2.252 0 0124 6.75v15A2.252 2.252 0 0121.75 24h-1.5zm0-18a.75.75 0 00-.75.75v15c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75h-1.5zM11.25 24A2.252 2.252 0 019 21.75v-9a2.252 2.252 0 012.25-2.25h1.5A2.252 2.252 0 0115 12.75v9A2.252 2.252 0 0112.75 24h-1.5zm0-12a.75.75 0 00-.75.75v9c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-1.5zM2.25 24A2.252 2.252 0 010 21.75v-3a2.252 2.252 0 012.25-2.25h1.5A2.252 2.252 0 016 18.75v3A2.252 2.252 0 013.75 24h-1.5zm0-6a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-1.5z"}})])
          )
        }
      }
    