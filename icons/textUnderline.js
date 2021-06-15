
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
            children.concat([_c('path',{attrs:{"d":"M.75 23.998a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75zM12 19.5c-4.135 0-7.5-3.365-7.5-7.5V1.498h-.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5H6V12c0 3.308 2.692 6 6 6s6-2.692 6-6V1.498h-.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-.75V12c0 4.135-3.365 7.5-7.5 7.5z"}})])
          )
        }
      }
    