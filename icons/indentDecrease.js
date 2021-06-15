
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
            children.concat([_c('path',{attrs:{"d":"M.75 3.498a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75zM11.25 7.998a.75.75 0 010-1.5h12a.75.75 0 010 1.5h-12zM11.25 12.498a.75.75 0 010-1.5h12a.75.75 0 010 1.5h-12zM11.25 16.998a.75.75 0 010-1.5h12a.75.75 0 010 1.5h-12zM.75 21.498a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75zM7.499 18.499c-.4 0-.776-.156-1.059-.438L1.5 13.117a1.489 1.489 0 01-.439-1.06c0-.401.156-.777.439-1.061l4.94-4.939a1.49 1.49 0 011.06-.439c.401 0 .778.156 1.061.439.283.284.439.66.439 1.059V17c0 .401-.157.778-.44 1.061-.284.283-.66.438-1.06.438h-.001zm-4.938-6.442L7.5 17V7.117l-4.939 4.94z"}})])
          )
        }
      }
    