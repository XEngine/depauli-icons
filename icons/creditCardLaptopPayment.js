
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
            children.concat([_c('path',{attrs:{"d":"M2.252 19.5A2.252 2.252 0 01.24 16.243l1.836-3.671a3.768 3.768 0 011.357-1.499A2.238 2.238 0 013 9.75v-7.5C3 1.009 4.01 0 5.25 0h13.5A2.252 2.252 0 0121 2.25v7.5A2.252 2.252 0 0118.75 12H5.429c-.858 0-1.629.477-2.012 1.243l-1.836 3.671a.75.75 0 00.671 1.085H7.5a.75.75 0 010 1.501H2.252zm2.998-18a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-7.5a.75.75 0 00-.75-.75H5.25z"}}),_c('path',{attrs:{"d":"M12.75 24a2.252 2.252 0 01-2.25-2.25v-6a2.252 2.252 0 012.25-2.25h9A2.252 2.252 0 0124 15.75v6A2.252 2.252 0 0121.75 24h-9zM12 21.75c0 .414.337.75.75.75h9a.75.75 0 00.75-.75V18H12v3.75zm10.5-5.25v-.75a.75.75 0 00-.75-.75h-9a.75.75 0 00-.75.75v.75h10.5z"}}),_c('path',{attrs:{"d":"M18.75 21a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    