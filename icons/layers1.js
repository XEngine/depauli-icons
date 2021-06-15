
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
            children.concat([_c('path',{attrs:{"d":"M8.25 15A2.252 2.252 0 016 12.75v-7.5A2.252 2.252 0 018.25 3h13.5A2.252 2.252 0 0124 5.25v7.5A2.252 2.252 0 0121.75 15H8.25zm0-10.5a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-7.5a.75.75 0 00-.75-.75H8.25z"}}),_c('path',{attrs:{"d":"M5.25 18A2.252 2.252 0 013 15.75V7.5a.75.75 0 011.5 0v8.25c0 .414.336.75.75.75H19.5a.75.75 0 010 1.5H5.25z"}}),_c('path',{attrs:{"d":"M2.25 21A2.252 2.252 0 010 18.75V10.5a.75.75 0 011.5 0v8.25c0 .414.336.75.75.75H16.5a.75.75 0 010 1.5H2.25z"}})])
          )
        }
      }
    