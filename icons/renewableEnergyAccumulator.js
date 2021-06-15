
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
            children.concat([_c('path',{attrs:{"d":"M7.5 15a.753.753 0 01-.75-.75V9H4.875a1.126 1.126 0 01-.86-1.851L9.931.261A.75.75 0 0111.25.75V6h1.875c.265.001.521.095.723.264.231.194.372.466.397.765a1.12 1.12 0 01-.26.822l-5.916 6.888A.75.75 0 017.5 15zm0-7.5a.75.75 0 01.75.75v3.976l4.06-4.727-1.81.001a.75.75 0 01-.75-.75V2.774L5.69 7.501 7.5 7.5z"}}),_c('path',{attrs:{"d":"M3 24a2.252 2.252 0 01-2.25-2.25v-18A2.252 2.252 0 013 1.5h2.25a.75.75 0 010 1.5H3a.75.75 0 00-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 00.75-.75v-18A.75.75 0 0021 3h-7.5a.75.75 0 010-1.5H21a2.252 2.252 0 012.25 2.25v18A2.252 2.252 0 0121 24H3z"}}),_c('path',{attrs:{"d":"M7.5 21a.75.75 0 010-1.5h.75v-2.25a.75.75 0 011.5 0v2.25h3V15a.75.75 0 011.5 0v4.5h3v-8.25a.75.75 0 011.5 0v8.25h.75a.75.75 0 010 1.5h-12z"}})])
          )
        }
      }
    