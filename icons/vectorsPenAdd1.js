
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
            children.concat([_c('path',{attrs:{"d":"M4.498 9a.75.75 0 01-.75-.75v-3h-3a.75.75 0 010-1.5h3v-3a.75.75 0 011.5 0v3h3a.75.75 0 010 1.5h-3v3a.75.75 0 01-.75.75zM5.651 24.001a1.283 1.283 0 01-.878-.343.355.355 0 01-.085-.085 1.295 1.295 0 01-.293-1.235l2.73-10.261A2.96 2.96 0 019.12 10.04l5.898-2.475 2.422-2.422a2.706 2.706 0 011.922-.797c.726 0 1.409.282 1.922.796l1.919 1.919a2.721 2.721 0 010 3.843l-2.424 2.422-2.473 5.898a2.956 2.956 0 01-2.024 1.997L5.994 23.954a1.225 1.225 0 01-.343.047zm7.073-9.13a.749.749 0 01.53 1.28L7.37 22.037l8.513-2.261c.48-.138.854-.515.994-1.007a.875.875 0 01.03-.086l2.352-5.608-3.988-3.988-5.608 2.353a.91.91 0 01-.083.029 1.458 1.458 0 00-1.008 1.007l-2.261 8.499 5.883-5.884a.747.747 0 01.53-.22zm7.421-3.031l1.997-1.995a1.22 1.22 0 000-1.722l-1.917-1.918a1.211 1.211 0 00-.862-.357v-.375.375a1.21 1.21 0 00-.861.357L16.505 8.2l3.64 3.64z"}})])
          )
        }
      }
    