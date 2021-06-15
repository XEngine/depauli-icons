
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
            children.concat([_c('path',{attrs:{"d":"M11.75 23.647c-4.135 0-7.5-3.365-7.5-7.5 0-5.015 4.365-12.306 6.242-15.207a1.487 1.487 0 011.259-.687 1.489 1.489 0 011.258.69c1.875 2.899 6.24 10.189 6.24 15.204.001 4.136-3.364 7.5-7.499 7.5zm0-21.889c-1.415 2.188-6 9.65-6 14.39 0 3.308 2.692 6 6 6s6-2.692 6-6c0-4.744-4.59-12.21-6-14.39z"}}),_c('path',{attrs:{"d":"M11.75 20.65a4.505 4.505 0 01-4.5-4.5.751.751 0 011.5-.002 3.005 3.005 0 003 3.003.75.75 0 010 1.499z"}})])
          )
        }
      }
    