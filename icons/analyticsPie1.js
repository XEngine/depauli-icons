
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
            children.concat([_c('path',{attrs:{"d":"M13.5 11.25a.75.75 0 01-.75-.75v-9a.75.75 0 01.75-.75c5.376 0 9.75 4.374 9.75 9.75a.75.75 0 01-.75.75h-9zm8.216-1.5c-.359-3.929-3.537-7.107-7.466-7.466V9.75h7.466z"}}),_c('path',{attrs:{"d":"M10.5 23.25c-5.376 0-9.75-4.374-9.75-9.75s4.374-9.75 9.75-9.75a.75.75 0 01.75.75v8.25h8.25a.75.75 0 01.75.75c0 5.376-4.374 9.75-9.75 9.75zM9.75 5.284a8.229 8.229 0 00-7.5 8.216c0 4.549 3.701 8.25 8.25 8.25 4.3 0 7.837-3.264 8.216-7.5H10.5a.75.75 0 01-.75-.75V5.284z"}})])
          )
        }
      }
    