
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
            children.concat([_c('path',{attrs:{"d":"M12 24a.75.75 0 01-.75-.75V21H9a.75.75 0 010-1.5h2.25v-3.034a8.237 8.237 0 01-7.5-8.216C3.75 3.701 7.451 0 12 0s8.25 3.701 8.25 8.25a8.237 8.237 0 01-7.5 8.216V19.5H15a.75.75 0 010 1.5h-2.25v2.25A.75.75 0 0112 24zm0-22.5c-3.722 0-6.75 3.028-6.75 6.75S8.278 15 12 15s6.75-3.028 6.75-6.75S15.722 1.5 12 1.5z"}})])
          )
        }
      }
    