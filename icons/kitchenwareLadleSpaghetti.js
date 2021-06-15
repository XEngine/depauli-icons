
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
            children.concat([_c('path',{attrs:{"d":"M15.75 24c-4.549 0-8.25-3.701-8.25-8.25v-7.5A6.758 6.758 0 00.75 1.5a.75.75 0 010-1.5C5.299 0 9 3.701 9 8.25v7.5c0 3.722 3.028 6.75 6.75 6.75s6.75-3.028 6.75-6.75a.75.75 0 00-1.5 0c0 1.241-1.009 2.25-2.25 2.25s-2.25-1.009-2.25-2.25a.75.75 0 00-1.5 0A2.252 2.252 0 0112.75 18a2.252 2.252 0 01-2.25-2.25.75.75 0 011.5 0 .75.75 0 001.5 0c0-1.241 1.009-2.25 2.25-2.25S18 14.509 18 15.75a.75.75 0 001.5 0c0-1.241 1.009-2.25 2.25-2.25S24 14.509 24 15.75c0 4.549-3.701 8.25-8.25 8.25z"}})])
          )
        }
      }
    