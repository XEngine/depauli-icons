
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24a.75.75 0 010-1.5h3v-9h-7.5a.75.75 0 01-.75-.75v-1.5a8.978 8.978 0 018.25-8.968V.75a.75.75 0 011.5 0v1.532A8.978 8.978 0 0121 11.25v1.5a.75.75 0 01-.75.75h-4.5v3a.75.75 0 01-1.5 0v-3h-1.5v9h3a.75.75 0 010 1.5h-7.5zM19.5 12v-.75c0-4.135-3.365-7.5-7.5-7.5s-7.5 3.365-7.5 7.5V12h15z"}})])
          )
        }
      }
    