
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
            children.concat([_c('path',{attrs:{"d":"M3.83 24a.743.743 0 01-.53-.22.744.744 0 010-1.06L20.584 5.436a2.29 2.29 0 00.675-1.63c0-.616-.24-1.195-.675-1.63s-1.015-.676-1.63-.676-1.195.24-1.63.675l-3.562 3.562V8.41a.75.75 0 01-.75.75h-2.223v2.161a.75.75 0 01-.75.75H7.392l-4.109 4.145a.746.746 0 01-1.061.004.743.743 0 01-.222-.529.744.744 0 01.217-.531l4.329-4.367a.756.756 0 01.533-.222h2.209V8.41a.75.75 0 01.75-.75h2.223V5.427c0-.2.078-.389.22-.53l3.782-3.782A3.778 3.778 0 0118.954 0c1.016 0 1.972.396 2.691 1.115a3.78 3.78 0 011.115 2.691 3.781 3.781 0 01-1.115 2.691L4.36 23.78a.743.743 0 01-.53.22z"}})])
          )
        }
      }
    