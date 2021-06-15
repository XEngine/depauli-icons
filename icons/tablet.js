
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
            children.concat([_c('path',{attrs:{"d":"M5.247 24a2.252 2.252 0 01-2.25-2.25v-2.948a.394.394 0 010-.103V2.25A2.252 2.252 0 015.247 0h13.5a2.252 2.252 0 012.25 2.25v19.5a2.252 2.252 0 01-2.25 2.25h-13.5zm-.75-2.25c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V19.5h-15v2.25zm15-3.75V2.25a.75.75 0 00-.75-.75h-13.5a.75.75 0 00-.75.75V18h15z"}}),_c('path',{attrs:{"d":"M7.497 9a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3zm2.25-1.5V6h-1.5v1.5h1.5zM13.497 9a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3zm2.25-1.5V6h-1.5v1.5h1.5zM7.497 15a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3zm2.25-1.5V12h-1.5v1.5h1.5z"}})])
          )
        }
      }
    