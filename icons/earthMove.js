
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
            children.concat([_c('path',{attrs:{"d":"M12 19.5a7.524 7.524 0 01-7.095-5.072 7.461 7.461 0 01.001-4.856 7.572 7.572 0 015.534-4.906 7.404 7.404 0 013.122-.001 7.572 7.572 0 015.532 4.907 7.45 7.45 0 010 4.857A7.522 7.522 0 0112 19.5zm-.392-1.513a5.766 5.766 0 00.788 0c.329-.973.586-1.975.769-2.987h-2.33c.183 1.004.442 2.006.773 2.987zM6.808 15a6.075 6.075 0 003.113 2.626A22.664 22.664 0 019.31 15H6.808zm7.878 0a22.474 22.474 0 01-.604 2.625A6.071 6.071 0 0017.192 15h-2.506zm3.124-1.5a6.006 6.006 0 000-3h-2.824a22.43 22.43 0 01-.099 3h2.923zm-4.429 0a20.65 20.65 0 00.104-3h-2.973a20.988 20.988 0 00.106 3h2.763zm-4.272 0a22.534 22.534 0 01-.098-3H6.19a6.006 6.006 0 000 3h2.919zM17.193 9a6.036 6.036 0 00-2.686-2.449c.17.805.298 1.625.38 2.449h2.306zm-3.815 0a21.123 21.123 0 00-.527-2.938 5.985 5.985 0 00-1.702 0A21.246 21.246 0 0010.62 9h2.758zM9.111 9c.083-.818.212-1.638.385-2.45A6.04 6.04 0 006.807 9h2.304zM12 24a.743.743 0 01-.53-.22l-1.5-1.5a.752.752 0 010-1.061.746.746 0 011.06.001l.97.97.97-.97c.141-.142.33-.22.53-.22s.389.078.53.22a.752.752 0 010 1.061l-1.5 1.5A.746.746 0 0112 24zM2.25 14.25a.743.743 0 01-.53-.22l-1.5-1.5C.078 12.389 0 12.2 0 12s.078-.389.22-.53l1.5-1.5a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-.969.97.97.97a.75.75 0 01-.531 1.28zM13.5 3a.743.743 0 01-.53-.22L12 1.811l-.97.97a.746.746 0 01-1.06-.001c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l1.5-1.5C11.611.078 11.8 0 12 0s.389.078.53.22l1.5 1.5c.142.141.22.33.22.53s-.078.389-.22.53-.33.22-.53.22zM21.75 14.25a.752.752 0 01-.53-1.281l.97-.97-.97-.97c-.142-.14-.22-.329-.22-.529s.078-.389.22-.53a.749.749 0 011.06 0l1.5 1.5a.747.747 0 010 1.061l-1.5 1.5a.746.746 0 01-.53.219z"}})])
          )
        }
      }
    