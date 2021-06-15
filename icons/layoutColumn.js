
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
            children.concat([_c('path',{attrs:{"d":"M2.25 23.997A2.252 2.252 0 010 21.747v-19.5a2.252 2.252 0 012.25-2.25h1.5A2.252 2.252 0 016 2.247v19.5a2.252 2.252 0 01-2.25 2.25h-1.5zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-19.5a.75.75 0 00-.75-.75h-1.5zM11.251 23.997a2.252 2.252 0 01-2.25-2.25v-19.5a2.252 2.252 0 012.25-2.25h1.5a2.252 2.252 0 012.25 2.25v19.5a2.252 2.252 0 01-2.25 2.25h-1.5zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-19.5a.75.75 0 00-.75-.75h-1.5zM20.25 23.997a2.252 2.252 0 01-2.25-2.25v-19.5a2.252 2.252 0 012.25-2.25h1.5A2.252 2.252 0 0124 2.247v19.5a2.252 2.252 0 01-2.25 2.25h-1.5zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-19.5a.75.75 0 00-.75-.75h-1.5z"}})])
          )
        }
      }
    