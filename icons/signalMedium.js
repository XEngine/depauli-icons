
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
            children.concat([_c('path',{attrs:{"d":"M11.25 21A2.252 2.252 0 019 18.75v-9a2.252 2.252 0 012.25-2.25h1.5A2.252 2.252 0 0115 9.75v9A2.252 2.252 0 0112.75 21h-1.5zm0-12a.75.75 0 00-.75.75v9c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-1.5zM2.25 21A2.252 2.252 0 010 18.75v-3a2.252 2.252 0 012.25-2.25h1.5A2.252 2.252 0 016 15.75v3A2.252 2.252 0 013.75 21h-1.5zm0-6a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-1.5zM18.75 21a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z"}})])
          )
        }
      }
    