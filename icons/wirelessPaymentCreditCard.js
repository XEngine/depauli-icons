
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V2.25A2.252 2.252 0 012.25 0h10.5A2.252 2.252 0 0115 2.25v9a.75.75 0 01-1.5 0v-9a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v16.5h5.25a.75.75 0 010 1.5H1.5v1.5c0 .414.336.75.75.75h4.5a.75.75 0 010 1.5h-4.5z"}}),_c('path',{attrs:{"d":"M11.25 24A2.252 2.252 0 019 21.75v-6a2.252 2.252 0 012.25-2.25h10.5A2.252 2.252 0 0124 15.75v6A2.252 2.252 0 0121.75 24h-10.5zm-.75-2.25c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75V18h-12v3.75zm12-5.25v-.75a.75.75 0 00-.75-.75h-10.5a.75.75 0 00-.75.75v.75h12z"}}),_c('path',{attrs:{"d":"M12.75 21a.75.75 0 010-1.5H15a.75.75 0 010 1.5h-2.25z"}})])
          )
        }
      }
    