
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
            children.concat([_c('path',{attrs:{"d":"M12 21a.747.747 0 01-.335-.079l-1.5-.75a.75.75 0 01.671-1.343l1.164.584 1.165-.583a.746.746 0 011.006.336.751.751 0 01-.335 1.006l-1.5.75A.754.754 0 0112 21z"}}),_c('path',{attrs:{"d":"M8.25 24a3.754 3.754 0 01-3.75-3.75v-3H2.25A2.252 2.252 0 010 15V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25V15a2.252 2.252 0 01-2.25 2.25H19.5v3A3.754 3.754 0 0115.75 24h-7.5zM6 20.25a2.252 2.252 0 002.25 2.25h7.5A2.252 2.252 0 0018 20.25v-3H6v3zM1.5 15c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-3h-21v3zm21-4.5V6.75h-21v3.75h21zm0-5.25v-3a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v3h21z"}})])
          )
        }
      }
    