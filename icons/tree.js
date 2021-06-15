
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
            children.concat([_c('path',{attrs:{"d":"M12 24a.75.75 0 01-.75-.75v-2.284a8.237 8.237 0 01-7.5-8.216C3.75 7.012 9.273 0 12 0s8.25 7.012 8.25 12.75a8.237 8.237 0 01-7.5 8.216v2.284A.75.75 0 0112 24zm.75-4.542a6.746 6.746 0 006-6.708C18.75 7.612 13.599 1.5 12 1.5c-1.599 0-6.75 6.112-6.75 11.25a6.745 6.745 0 006 6.708v-5.285a3.743 3.743 0 01-3-3.673.75.75 0 011.5 0c0 .96.621 1.805 1.5 2.118V8.25a.75.75 0 011.5 0v7.404A2.995 2.995 0 0015 12.75a.75.75 0 011.5 0c0 2.188-1.621 4.073-3.75 4.435v2.273z"}})])
          )
        }
      }
    