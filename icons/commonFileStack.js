
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24a2.252 2.252 0 01-2.25-2.25V5.25a.75.75 0 011.5 0v16.5c0 .414.336.75.75.75h13.5a.75.75 0 010 1.5H3.75z"}}),_c('path',{attrs:{"d":"M6.75 21a2.252 2.252 0 01-2.25-2.25V2.25a.75.75 0 011.5 0v16.5c0 .414.336.75.75.75h13.5a.75.75 0 010 1.5H6.75z"}}),_c('path',{attrs:{"d":"M9.75 18a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 019.75 0h7.629c.601 0 1.165.234 1.59.658l2.872 2.872c.425.425.659.99.659 1.59v10.63A2.252 2.252 0 0120.25 18H9.75zm0-16.5a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75V5.121c0-.197-.08-.39-.219-.53l-2.872-2.872a.748.748 0 00-.53-.219H9.75z"}})])
          )
        }
      }
    