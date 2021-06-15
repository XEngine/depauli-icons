
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
            children.concat([_c('path',{attrs:{"d":"M2.252 24a2.235 2.235 0 01-1.591-.659 2.235 2.235 0 01-.659-1.591c0-.348.082-.696.238-1.007l1.836-3.671a3.768 3.768 0 011.357-1.499A2.238 2.238 0 013 14.25v-3a.75.75 0 011.5 0v3c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-3a.75.75 0 011.5 0v3c0 .48-.154.942-.432 1.323a3.761 3.761 0 011.357 1.499l1.836 3.671c.269.538.312 1.148.122 1.718A2.256 2.256 0 0121.748 24H2.252zm3.177-7.5c-.858 0-1.629.477-2.012 1.243l-1.836 3.671a.75.75 0 00.671 1.085h19.497a.754.754 0 00.712-.513.743.743 0 00-.041-.572l-1.836-3.671a2.238 2.238 0 00-2.013-1.243H5.429z"}}),_c('path',{attrs:{"d":"M10.5 21a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM21 9a3.02 3.02 0 01-2.25-1.018C18.185 8.62 17.363 9 16.5 9s-1.685-.38-2.25-1.018C13.685 8.62 12.863 9 12 9s-1.685-.38-2.25-1.018C9.185 8.62 8.363 9 7.5 9s-1.685-.38-2.25-1.018A3.02 3.02 0 013 9C1.346 9 0 7.654 0 6c0-.071.01-.142.03-.211l1.366-4.652A1.494 1.494 0 012.852 0h18.295c.689 0 1.303.486 1.46 1.157l1.362 4.632c.021.069.031.14.031.211 0 1.654-1.346 3-3 3zm-2.25-3.75a.75.75 0 01.75.75c0 .827.673 1.5 1.5 1.5a1.51 1.51 0 001.497-1.403L21.16 1.548l-.012-.046L2.852 1.5 1.503 6.097A1.51 1.51 0 003 7.5c.827 0 1.5-.673 1.5-1.5A.75.75 0 016 6c0 .827.673 1.5 1.5 1.5S9 6.827 9 6a.75.75 0 011.5 0c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5A.75.75 0 0115 6c0 .827.673 1.5 1.5 1.5S18 6.827 18 6a.75.75 0 01.75-.75z"}})])
          )
        }
      }
    