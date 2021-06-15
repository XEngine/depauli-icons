
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
            children.concat([_c('path',{attrs:{"d":"M2.25 16.5A2.252 2.252 0 010 14.25v-12A2.252 2.252 0 012.25 0h16.5A2.252 2.252 0 0121 2.25v6a.75.75 0 01-1.5 0V6h-18v8.25c0 .414.336.75.75.75h10.5a.75.75 0 010 1.5H2.25zm17.25-12V2.25a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75V4.5h18z"}}),_c('path',{attrs:{"d":"M3.75 9.75a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM3.75 12.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM17.25 24A2.252 2.252 0 0115 21.75v-9a2.252 2.252 0 012.25-2.25h4.5A2.252 2.252 0 0124 12.75v9A2.252 2.252 0 0121.75 24h-4.5zm-.75-2.25c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75V21h-6v.75zm6-2.25v-6.75a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75v6.75h6z"}})])
          )
        }
      }
    