
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
            children.concat([_c('path',{attrs:{"d":"M6.747 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 016.747 0h10.5a2.252 2.252 0 012.25 2.25v16.338a.695.695 0 010 .324v2.838a2.252 2.252 0 01-2.25 2.25h-10.5zm-.75-2.25c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75V19.5h-12v2.25zm12-3.75V2.25a.75.75 0 00-.75-.75h-10.5a.75.75 0 00-.75.75V18h12z"}}),_c('path',{attrs:{"d":"M8.266 6a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5zM8.266 9a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5zM8.266 12a.75.75 0 010-1.5h3.75a.75.75 0 010 1.5h-3.75z"}})])
          )
        }
      }
    