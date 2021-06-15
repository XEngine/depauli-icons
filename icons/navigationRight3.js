
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
            children.concat([_c('path',{attrs:{"d":"M18.748 18.747a.751.751 0 01-.6-1.2l3.6-4.8H5.998v3a.75.75 0 01-1.5 0v-7.5a.75.75 0 011.5 0v3h15.77L18.241 6.44a.747.747 0 01.605-1.193c.238 0 .464.115.605.307l4.402 6 .018.027a.773.773 0 01.127.417l-.001.03a.763.763 0 01-.031.182l-.012.038a.79.79 0 01-.084.167l-.01.015-4.512 6.017a.753.753 0 01-.6.3zM.748 16.497a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    