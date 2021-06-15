
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
            children.concat([_c('path',{attrs:{"d":"M13.5 24C9.365 24 6 20.635 6 16.5v-.042A6.754 6.754 0 010 9.75v-6A2.252 2.252 0 012.25 1.5H3V.75a.75.75 0 011.5 0V4.5a.75.75 0 01-1.5 0V3h-.75a.75.75 0 00-.75.75v6C1.5 12.645 3.855 15 6.75 15S12 12.645 12 9.75v-6a.75.75 0 00-.75-.75h-.75v1.5a.75.75 0 01-1.5 0V.75a.75.75 0 011.5 0v.75h.75a2.252 2.252 0 012.25 2.25v6a6.756 6.756 0 01-6 6.708v.042c0 3.308 2.692 6 6 6s6-2.692 6-6v-3.077a3.743 3.743 0 01-3-3.673C16.5 7.682 18.182 6 20.25 6S24 7.682 24 9.75a3.743 3.743 0 01-3 3.673V16.5c0 4.135-3.365 7.5-7.5 7.5zm6.75-16.5C19.009 7.5 18 8.509 18 9.75S19.009 12 20.25 12s2.25-1.009 2.25-2.25-1.009-2.25-2.25-2.25z"}})])
          )
        }
      }
    