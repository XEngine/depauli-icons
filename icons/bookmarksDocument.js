
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
            children.concat([_c('path',{attrs:{"d":"M2.25 23.999A2.252 2.252 0 010 21.749v-18a2.252 2.252 0 012.25-2.25H4.5c0-.399.155-.776.438-1.059a1.49 1.49 0 011.06-.441H10.5c.827 0 1.5.673 1.5 1.5h9.75A2.252 2.252 0 0124 3.749v18a2.252 2.252 0 01-2.25 2.25H2.25zm0-21a.75.75 0 00-.75.75v18c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-18a.75.75 0 00-.75-.75H12v8.25a.747.747 0 01-1.199.6L8.25 9.938 5.7 11.85a.753.753 0 01-.785.071.746.746 0 01-.415-.671V2.999H2.25zm3.749-1.5L6 9.75 7.8 8.4a.745.745 0 01.9 0l1.8 1.349v-8.25H5.999z"}}),_c('path',{attrs:{"d":"M5.25 19.499a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H5.25zM5.25 14.999a.75.75 0 010-1.5h13.5a.75.75 0 010 1.5H5.25zM14.25 10.499a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z"}})])
          )
        }
      }
    