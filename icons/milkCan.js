
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
            children.concat([_c('path',{attrs:{"d":"M6.75 24a2.252 2.252 0 01-2.25-2.25V9.311L1.72 6.53C1.578 6.389 1.5 6.2 1.5 6s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l2.053 2.053.041-.065 2.197-3.293A2.258 2.258 0 016 2.25 2.252 2.252 0 018.25 0h7.5A2.252 2.252 0 0118 2.25c0 .788-.417 1.51-1.072 1.914l2.194 3.288.045.07L21.22 5.47a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53L19.5 9.31v12.44A2.252 2.252 0 0117.25 24H6.75zM6 21.75c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75V9H6.001L6 21.75zM17.351 7.5l-2.002-3H8.651l-2.001 3h10.701zm-9.101-6a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z"}})])
          )
        }
      }
    