
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
            children.concat([_c('path',{attrs:{"d":"M12 24a.75.75 0 01-.75-.75V18H7.5a2.252 2.252 0 01-2.25-2.25v-9C5.25 3.028 8.278 0 12 0s6.75 3.028 6.75 6.75v9A2.252 2.252 0 0116.5 18h-3.75v5.25A.75.75 0 0112 24zm0-22.5a5.256 5.256 0 00-5.25 5.25v9c0 .414.336.75.75.75h9a.75.75 0 00.75-.75v-9A5.256 5.256 0 0012 1.5z"}}),_c('path',{attrs:{"d":"M15 12.75a.75.75 0 01-.75-.75V7.5a.75.75 0 00-1.5 0v.75c0 1.241-1.009 2.25-2.25 2.25S8.25 9.491 8.25 8.25v-3a.75.75 0 011.5 0v3a.75.75 0 001.5 0V7.5c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25V12a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    