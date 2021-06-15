
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
            children.concat([_c('path',{attrs:{"d":"M15.25 24c-.965 0-1.75-.785-1.75-1.75v-3.737c0-.169.009-.341.027-.513h-3.055c.018.172.027.344.027.513v3.737c0 .965-.785 1.75-1.75 1.75h-7A1.752 1.752 0 010 22.25V.75A.75.75 0 01.75 0h22.5a.75.75 0 01.75.75v21.5c0 .965-.785 1.75-1.75 1.75h-7zm3.263-9A3.517 3.517 0 0015 18.513v3.737c0 .138.112.25.25.25h7a.25.25 0 00.25-.25V15h-3.987zM1.5 22.25c0 .138.112.25.25.25h7a.25.25 0 00.25-.25v-3.737A3.517 3.517 0 005.487 15H1.5v7.25zm12.427-5.75A4.996 4.996 0 0118 13.531V11.25h-.5A6.287 6.287 0 0112 7.964a6.287 6.287 0 01-5.5 3.286H6v2.281a4.994 4.994 0 014.072 2.969h3.855zm8.573-3v-2.25h-3v2.25h3zm-18 0v-2.25h-3v2.25h3zM12.75 5a4.756 4.756 0 004.75 4.75h5V1.5H21v3a.75.75 0 01-1.5 0v-3H18v3a.75.75 0 01-1.5 0v-3h-3.75V5zM6.5 9.75A4.756 4.756 0 0011.25 5V1.5H7.5v3a.75.75 0 01-1.5 0v-3H4.5v3a.75.75 0 01-1.5 0v-3H1.5v8.25h5z"}})])
          )
        }
      }
    