
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
            children.concat([_c('path',{attrs:{"d":"M21.75 22.5a.743.743 0 01-.53-.22l-3-3a.755.755 0 01-.22-.53v-5.413L6.782 20.193a1.498 1.498 0 01-2.282-1.28V12.75H.75a.75.75 0 010-1.5H4.5V5.087a1.502 1.502 0 012.282-1.28L18 10.663V5.561l-2.78-2.78a.747.747 0 010-1.061.749.749 0 011.06 0l3 3c.142.142.22.33.22.53v6h3.75a.75.75 0 010 1.5H19.5v5.689l2.78 2.78a.752.752 0 01-.53 1.281zM6 18.913L17.312 12 6 5.087v13.826z"}})])
          )
        }
      }
    