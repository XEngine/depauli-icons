
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
            children.concat([_c('path',{attrs:{"d":"M3 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 013 0h18a2.252 2.252 0 012.25 2.25v19.5A2.252 2.252 0 0121 24H3zm-.75-2.25c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V13.5H2.25v8.25zM21.75 12V9H2.25v3h19.5zm0-4.5V2.25A.75.75 0 0021 1.5H3a.75.75 0 00-.75.75V7.5h1.629a2.231 2.231 0 01-.129-.75v-1.5A2.252 2.252 0 016 3h3a2.252 2.252 0 012.25 2.25v1.5c0 .259-.044.511-.129.75h1.758a2.231 2.231 0 01-.129-.75v-1.5A2.252 2.252 0 0115 3h3a2.252 2.252 0 012.25 2.25v1.5c0 .259-.044.511-.129.75h1.629zM15 4.5a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-1.5A.75.75 0 0018 4.5h-3zm-9 0a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-1.5A.75.75 0 009 4.5H6z"}})])
          )
        }
      }
    