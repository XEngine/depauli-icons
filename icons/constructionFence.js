
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75v-18A2.252 2.252 0 012.25 1.5h1.5c.96 0 1.808.615 2.121 1.5H9V.75a.75.75 0 011.5 0V3h3V.75a.75.75 0 011.5 0V3h3V.75a.75.75 0 011.5 0V3h3.75a.75.75 0 010 1.5H19.5v3h3.75a.75.75 0 010 1.5H19.5v3h3.75a.75.75 0 010 1.5H19.5v3h2.25A2.252 2.252 0 0124 18.75v3A2.252 2.252 0 0121.75 24H2.25zm0-21a.75.75 0 00-.75.75v18c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-6.879c-.6 0-1.165-.234-1.59-.658l-3.622-3.623A2.233 2.233 0 019 12.129V9.75A.75.75 0 008.25 9h-1.5A2.252 2.252 0 014.5 6.75v-3A.75.75 0 003.75 3h-1.5zM6 6.75c0 .414.336.75.75.75h1.5a2.252 2.252 0 012.25 2.25v2.379c0 .2.078.388.219.53l3.622 3.622c.142.141.33.219.53.219H18v-3h-4.5a.75.75 0 010-1.5V9h-.75a.75.75 0 010-1.5h.75v-3h-3v.75a.75.75 0 01-1.5 0V4.5H6v2.25zM18 12V9h-3v3h3zm0-4.5v-3h-3v3h3z"}})])
          )
        }
      }
    