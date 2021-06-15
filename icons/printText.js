
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
            children.concat([_c('path',{attrs:{"d":"M5.25 23.999a.75.75 0 01-.75-.75v-5.25H2.25A2.252 2.252 0 010 15.749v-7.5a2.252 2.252 0 012.25-2.25H4.5v-3.75a2.252 2.252 0 012.25-2.25h10.5a2.252 2.252 0 012.25 2.25v3.75h2.25A2.252 2.252 0 0124 8.249v7.5a2.252 2.252 0 01-2.25 2.25H19.5v5.25a.75.75 0 01-.75.75H5.25zm12.75-1.5v-9H6v9h12zm3.75-6a.75.75 0 00.75-.75v-7.5a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75H4.5v-3.75a.75.75 0 01.75-.75h13.5a.75.75 0 01.75.75v3.75h2.25zM18 5.999v-3.75a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75h12z"}}),_c('path',{attrs:{"d":"M3.75 10.499a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM8.25 16.499a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5zM8.25 19.499a.75.75 0 010-1.5h5.25a.75.75 0 010 1.5H8.25z"}})])
          )
        }
      }
    