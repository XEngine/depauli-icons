
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
            children.concat([_c('path',{attrs:{"d":"M3.75 19.5A3.754 3.754 0 010 15.75v-12A3.754 3.754 0 013.75 0h12a3.754 3.754 0 013.75 3.75v4.5a.75.75 0 01-1.5 0V7.5h-4.5v2.25a.75.75 0 01-1.5 0V7.5H7.5V12h2.25a.75.75 0 010 1.5H7.5V18h.75a.75.75 0 010 1.5h-4.5zM1.5 15.75A2.252 2.252 0 003.75 18H6v-4.5H1.5v2.25zM6 12V7.5H1.5V12H6zm12-6V3.75a2.252 2.252 0 00-2.25-2.25H13.5V6H18zm-6 0V1.5H7.5V6H12zM6 6V1.5H3.75A2.252 2.252 0 001.5 3.75V6H6z"}}),_c('path',{attrs:{"d":"M17.25 24a6.708 6.708 0 01-4.749-1.957l-.024-.022a6.684 6.684 0 01-1.978-4.771 6.758 6.758 0 016.75-6.75 6.706 6.706 0 014.801 2.01A6.691 6.691 0 0124 17.25 6.758 6.758 0 0117.25 24zm-3.142-2.549A5.239 5.239 0 0017.25 22.5a5.256 5.256 0 005.25-5.25c0-1.135-.37-2.236-1.048-3.141l-7.344 7.342zM17.25 12A5.256 5.256 0 0012 17.25c0 1.135.37 2.236 1.048 3.141l7.344-7.343A5.244 5.244 0 0017.25 12z"}})])
          )
        }
      }
    