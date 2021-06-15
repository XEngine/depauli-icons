
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
            children.concat([_c('path',{attrs:{"d":"M2.247 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 012.247 0h19.5a2.252 2.252 0 012.25 2.25v19.5a2.252 2.252 0 01-2.25 2.25h-19.5zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75h-19.5z"}}),_c('path',{attrs:{"d":"M9.747 18a2.252 2.252 0 01-2.25-2.25v-7.5A2.252 2.252 0 019.747 6h4.5a2.252 2.252 0 012.25 2.25v7.5a2.252 2.252 0 01-2.25 2.25h-4.5zm0-10.5a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-7.5a.75.75 0 00-.75-.75h-4.5z"}}),_c('path',{attrs:{"d":"M11.247 15a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    