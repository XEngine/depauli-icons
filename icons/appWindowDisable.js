
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
            children.concat([_c('path',{attrs:{"d":"M2.26 21.003a2.252 2.252 0 01-2.25-2.25v-16.5A2.252 2.252 0 012.26.003h18a2.252 2.252 0 012.25 2.25v6a.75.75 0 01-1.5 0v-2.25H1.51v12.75c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6zm18.75-16.5v-2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.25h19.5z"}}),_c('path',{attrs:{"d":"M17.258 24.003a6.706 6.706 0 01-4.801-2.01 6.694 6.694 0 01-1.949-4.74 6.758 6.758 0 016.75-6.75 6.706 6.706 0 014.801 2.01 6.694 6.694 0 011.949 4.74 6.758 6.758 0 01-6.75 6.75zm-3.141-2.548a5.241 5.241 0 003.141 1.048 5.256 5.256 0 005.25-5.25c0-1.135-.37-2.236-1.048-3.141l-7.343 7.343zm3.141-9.452a5.256 5.256 0 00-5.25 5.25c0 1.135.37 2.236 1.048 3.141l7.343-7.343a5.239 5.239 0 00-3.141-1.048z"}})])
          )
        }
      }
    