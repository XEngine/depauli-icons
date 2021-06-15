
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
            children.concat([_c('path',{attrs:{"d":"M11.999 20.254c-.337 0-.669-.117-.935-.329L.844 11.749A2.242 2.242 0 010 9.992V4.773a1.502 1.502 0 012.437-1.172L12 11.252l9.562-7.65a1.504 1.504 0 012.109.233c.212.265.329.598.329.939v5.218a2.24 2.24 0 01-.845 1.757l-10.218 8.175c-.267.213-.6.33-.938.33zM1.5 9.992c0 .229.103.442.281.585L12 18.753l10.219-8.175a.745.745 0 00.282-.585v-5.22L12.47 12.798a.753.753 0 01-.938 0L1.5 4.773v5.219z"}})])
          )
        }
      }
    