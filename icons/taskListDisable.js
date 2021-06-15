
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24.011a6.708 6.708 0 01-4.749-1.957l-.024-.022a6.684 6.684 0 01-1.978-4.771 6.758 6.758 0 016.75-6.75 6.703 6.703 0 014.802 2.011A6.694 6.694 0 0124 17.261a6.758 6.758 0 01-6.75 6.75zm-3.142-2.549a5.239 5.239 0 003.142 1.049 5.256 5.256 0 005.25-5.25c0-1.135-.37-2.236-1.048-3.141l-7.344 7.342zm3.142-9.451a5.256 5.256 0 00-5.25 5.25c0 1.135.37 2.236 1.048 3.141l7.343-7.343a5.239 5.239 0 00-3.141-1.048zM5.25 11.261a.75.75 0 010-1.5h5.25a.75.75 0 010 1.5H5.25zM5.25 15.011a.75.75 0 010-1.5H7.5a.75.75 0 010 1.5H5.25zM5.25 18.761a.75.75 0 010-1.5H7.5a.75.75 0 010 1.5H5.25z"}}),_c('path',{attrs:{"d":"M2.25 24.011A2.252 2.252 0 010 21.761V6.011a2.252 2.252 0 012.25-2.25h3.063C5.675 1.632 7.561.011 9.75.011c2.19 0 4.076 1.621 4.437 3.75h3.063a2.252 2.252 0 012.25 2.25v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 00-.75-.75H13.5a.75.75 0 01-.75-.75c0-1.654-1.346-3-3-3s-3 1.346-3 3a.75.75 0 01-.75.75H2.25a.75.75 0 00-.75.75v15.75c0 .414.336.75.75.75h7.5a.75.75 0 010 1.5h-7.5z"}}),_c('circle',{attrs:{"cx":"9.75","cy":"4.136","r":"1.125"}})])
          )
        }
      }
    