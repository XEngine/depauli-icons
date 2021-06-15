
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
            children.concat([_c('path',{attrs:{"d":"M4.875 24a.75.75 0 010-1.5c1.654 0 3-1.346 3-3v-6h-2.25a.75.75 0 010-1.5h2.25V6c0-3.308 2.692-6 6-6s6 2.692 6 6a.75.75 0 01-1.5 0c0-2.481-2.019-4.5-4.5-4.5a4.505 4.505 0 00-4.5 4.5v6h8.25a.75.75 0 010 1.5h-8.25v6a4.502 4.502 0 01-1.149 3h10.899a.75.75 0 010 1.5H4.875z"}})])
          )
        }
      }
    