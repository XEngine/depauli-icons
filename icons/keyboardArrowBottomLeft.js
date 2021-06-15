
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
            children.concat([_c('path',{attrs:{"d":"M.75 23.997a.755.755 0 01-.26-.047l-.022-.008A.756.756 0 010 23.247v-6.75a.75.75 0 011.5 0v4.939L22.72.216a.744.744 0 011.06 0 .747.747 0 010 1.061L2.56 22.497H7.5a.75.75 0 010 1.5H.75z"}})])
          )
        }
      }
    