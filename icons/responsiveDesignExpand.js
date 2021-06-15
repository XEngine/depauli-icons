
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
            children.concat([_c('path',{attrs:{"d":"M15.75 18a.75.75 0 010-1.5h6a.75.75 0 00.75-.75V6H3v5.255a.75.75 0 01-1.5 0V2.25A2.252 2.252 0 013.75 0h18A2.252 2.252 0 0124 2.25v13.5A2.252 2.252 0 0121.75 18h-6zM22.5 4.5V2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75V4.5h19.5z"}}),_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75v-6a2.252 2.252 0 012.25-2.25h9a2.252 2.252 0 012.25 2.25v6A2.252 2.252 0 0111.25 24h-9zm-.75-2.25c0 .414.336.75.75.75h9a.75.75 0 00.75-.75V18H1.5v3.75zM12 16.5v-.75a.75.75 0 00-.75-.75h-9a.75.75 0 00-.75.75v.75H12z"}})])
          )
        }
      }
    