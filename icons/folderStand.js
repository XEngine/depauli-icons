
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
            children.concat([_c('path',{attrs:{"d":"M6 24a.75.75 0 010-1.5h5.25v-3H3a2.252 2.252 0 01-2.25-2.25v-15A2.252 2.252 0 013 0h4.5a2.252 2.252 0 012.25 2.25V3H21a2.252 2.252 0 012.25 2.25v12A2.252 2.252 0 0121 19.5h-8.25v3H18a.75.75 0 010 1.5H6zM3 1.5a.75.75 0 00-.75.75v15c0 .414.336.75.75.75h18a.75.75 0 00.75-.75v-12A.75.75 0 0021 4.5H9a.75.75 0 01-.75-.75v-1.5a.75.75 0 00-.75-.75H3zM1.5 24a.75.75 0 010-1.5H3A.75.75 0 013 24H1.5zM21 24a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5H21z"}})])
          )
        }
      }
    