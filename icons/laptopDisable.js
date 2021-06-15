
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24a6.708 6.708 0 01-4.749-1.957l-.024-.022a6.684 6.684 0 01-1.978-4.771 6.758 6.758 0 016.75-6.75 6.706 6.706 0 014.801 2.01A6.691 6.691 0 0124 17.25 6.758 6.758 0 0117.25 24zm-3.142-2.549A5.239 5.239 0 0017.25 22.5a5.256 5.256 0 005.25-5.25c0-1.135-.37-2.236-1.048-3.141l-7.344 7.342zM17.25 12A5.256 5.256 0 0012 17.25c0 1.135.37 2.236 1.048 3.141l7.344-7.343A5.244 5.244 0 0017.25 12z"}}),_c('path',{attrs:{"d":"M4.5 16.5A4.505 4.505 0 010 12a.75.75 0 01.75-.75h1.5v-9A2.252 2.252 0 014.5 0h15a2.252 2.252 0 012.25 2.25v6a.75.75 0 01-1.5 0v-6a.75.75 0 00-.75-.75h-15a.75.75 0 00-.75.75v9h6a.75.75 0 010 1.5H1.594A2.997 2.997 0 004.5 15h3.75a.75.75 0 010 1.5H4.5z"}})])
          )
        }
      }
    