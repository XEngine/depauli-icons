
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
            children.concat([_c('path',{attrs:{"d":"M9.75 24a2.252 2.252 0 01-2.25-2.25v-2.327a3.743 3.743 0 01-3-3.673v-7.5a3.743 3.743 0 013-3.673V2.25A2.252 2.252 0 019.75 0h4.5a2.252 2.252 0 012.25 2.25v2.327c1.732.351 3 1.874 3 3.673v7.5a3.743 3.743 0 01-3 3.673v2.327A2.252 2.252 0 0114.25 24h-4.5zM9 21.75c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75V19.5l-6 2.25zM8.25 6A2.252 2.252 0 006 8.25v7.5A2.252 2.252 0 008.25 18h7.5A2.252 2.252 0 0018 15.75v-7.5A2.252 2.252 0 0015.75 6h-7.5zM15 4.5V2.25a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75V4.5h6z"}})])
          )
        }
      }
    