
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24a.75.75 0 01-.75-.75V16.5h-9v6.75a.75.75 0 01-1.5 0v-6.827a3.743 3.743 0 01-3-3.673v-9A3.754 3.754 0 016.75 0h10.5A3.754 3.754 0 0121 3.75v9a3.743 3.743 0 01-3 3.673v6.827a.75.75 0 01-.75.75zM4.5 12.75A2.252 2.252 0 006.75 15h10.5a2.252 2.252 0 002.25-2.25V6.748a3.725 3.725 0 01-2.25.752H6.75a3.725 3.725 0 01-2.25-.752v6.002zM6.75 1.5C5.509 1.5 4.5 2.509 4.5 3.75S5.509 6 6.75 6h10.5c1.241 0 2.25-1.009 2.25-2.25S18.491 1.5 17.25 1.5H6.75z"}})])
          )
        }
      }
    