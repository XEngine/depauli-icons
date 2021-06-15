
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
            children.concat([_c('path',{attrs:{"d":"M6.75 24a2.252 2.252 0 01-2.25-2.25v-2.149H2.25a.75.75 0 010-1.5H4.5v-3H2.25a.75.75 0 010-1.5H4.5v-3H2.25a.75.75 0 010-1.5H4.5v-3H2.25a.75.75 0 010-1.5H4.5V2.25A2.252 2.252 0 016.75 0h10.5a2.252 2.252 0 012.25 2.25v2.351h2.25a.75.75 0 010 1.5H19.5v3h2.25a.75.75 0 010 1.5H19.5v3h2.25a.75.75 0 010 1.5H19.5v3h2.25a.75.75 0 010 1.5H19.5v2.149A2.252 2.252 0 0117.25 24H6.75zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75H6.75z"}}),_c('path',{attrs:{"d":"M14.25 21a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    