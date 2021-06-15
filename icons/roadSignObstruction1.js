
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
            children.concat([_c('path',{attrs:{"d":"M7 24c-.965 0-1.75-.785-1.75-1.75V1.75C5.25.785 6.035 0 7 0h10c.965 0 1.75.785 1.75 1.75v20.5c0 .965-.785 1.75-1.75 1.75H7zm10-1.5a.25.25 0 00.25-.25v-3.939l-10.5-10.5v6.129l8.561 8.561H17zm-10.25-.25c0 .138.112.25.25.25h6.189L6.75 16.061v6.189zm10.5-6.061V10.06L8.689 1.5H7a.25.25 0 00-.25.25v3.939l10.5 10.5zm0-8.25V1.75A.25.25 0 0017 1.5h-6.189l6.439 6.439z"}})])
          )
        }
      }
    