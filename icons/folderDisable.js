
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
            children.concat([_c('path',{attrs:{"d":"M2.447 19.5a.725.725 0 01-.231-.037A2.465 2.465 0 010 17.06V2.25A2.252 2.252 0 012.25 0h4.5C7.99 0 9 1.009 9 2.25V3h9.75C19.99 3 21 4.009 21 5.25V7.5h.75c.601 0 1.166.234 1.591.658a2.235 2.235 0 01.583 2.171.752.752 0 01-.919.531.747.747 0 01-.53-.918A.746.746 0 0021.75 9H7.879a.755.755 0 00-.722.542l-2.351 8.154a2.337 2.337 0 01-.108.304H8.25a.75.75 0 010 1.5H2.447zm-.197-18a.75.75 0 00-.75.75v14.8a.95.95 0 001.864.235l2.352-8.158A2.261 2.261 0 017.878 7.5H19.5V5.25a.75.75 0 00-.75-.75H8.25a.75.75 0 01-.75-.75v-1.5a.75.75 0 00-.75-.75h-4.5z"}}),_c('path',{attrs:{"d":"M17.25 24a6.708 6.708 0 01-4.749-1.957l-.024-.022a6.684 6.684 0 01-1.978-4.771 6.758 6.758 0 016.75-6.75 6.706 6.706 0 014.801 2.01A6.691 6.691 0 0124 17.25 6.758 6.758 0 0117.25 24zm-3.142-2.549A5.239 5.239 0 0017.25 22.5a5.256 5.256 0 005.25-5.25c0-1.135-.37-2.236-1.048-3.141l-7.344 7.342zM17.25 12A5.256 5.256 0 0012 17.25c0 1.135.37 2.236 1.048 3.141l7.344-7.343A5.244 5.244 0 0017.25 12z"}})])
          )
        }
      }
    