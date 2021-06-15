
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
            children.concat([_c('path',{attrs:{"d":"M9.001 11.25A2.252 2.252 0 016.751 9V6.75a2.252 2.252 0 012.25-2.25h5.249a2.252 2.252 0 012.25 2.25V9a2.252 2.252 0 01-2.25 2.25H9.001zm0-5.25a.75.75 0 00-.75.75V9c0 .414.336.75.75.75h5.249A.75.75 0 0015 9V6.75a.75.75 0 00-.75-.75H9.001z"}}),_c('path',{attrs:{"d":"M3.75 24a2.252 2.252 0 01-2.25-2.25v-3H.75a.75.75 0 010-1.5h.75v-4.5H.75a.75.75 0 010-1.5h.75v-6H.75a.75.75 0 010-1.5h.75v-1.5A2.252 2.252 0 013.75 0H18c.96 0 1.808.615 2.121 1.5h1.629A2.252 2.252 0 0124 3.75v10.5a2.252 2.252 0 01-2.25 2.25h-1.5v5.25A2.252 2.252 0 0118 24H3.75zM3 21.75c0 .414.336.75.75.75H18a.75.75 0 00.75-.75V2.25A.75.75 0 0018 1.5H3.75a.75.75 0 00-.75.75v1.5h.75a.75.75 0 010 1.5H3v6h.75a.75.75 0 010 1.5H3v4.5h.75a.75.75 0 010 1.5H3v3zM21.75 15a.75.75 0 00.75-.75V12h-2.25l1.5 3zm.75-4.5v-3h-2.25v3h2.25zm0-4.5V3.75a.75.75 0 00-.75-.75h-1.5v3h2.25z"}})])
          )
        }
      }
    