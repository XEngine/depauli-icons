
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
            children.concat([_c('path',{attrs:{"d":"M7.5 24a.75.75 0 010-1.5h3.75v-3.028C5.653 19.1 1.149 14.597.778 9H.75a.75.75 0 010-1.5h3.034C4.165 3.266 7.707 0 12 0s7.835 3.266 8.216 7.5h3.034a.75.75 0 010 1.5h-.028c-.372 5.596-4.876 10.1-10.472 10.472V22.5h3.75a.75.75 0 010 1.5h-9zM2.281 9c.383 5.078 4.58 9 9.719 9s9.336-3.922 9.719-9h-1.503c-.381 4.234-3.923 7.5-8.216 7.5S4.165 13.234 3.784 9H2.281zM12 1.5c-3.722 0-6.75 3.028-6.75 6.75S8.278 15 12 15s6.75-3.028 6.75-6.75S15.722 1.5 12 1.5z"}})])
          )
        }
      }
    