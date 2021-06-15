
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
            children.concat([_c('path',{attrs:{"d":"M6.75 21a2.252 2.252 0 01-2.25-2.25V5.25A2.252 2.252 0 016.75 3h1.5a2.252 2.252 0 012.25 2.25v13.5A2.252 2.252 0 018.25 21h-1.5zm0-16.5a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75h-1.5zM15.75 21a2.252 2.252 0 01-2.25-2.25V5.25A2.252 2.252 0 0115.75 3h1.5a2.252 2.252 0 012.25 2.25v13.5A2.252 2.252 0 0117.25 21h-1.5zm0-16.5a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75h-1.5z"}})])
          )
        }
      }
    