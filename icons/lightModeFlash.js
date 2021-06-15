
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
            children.concat([_c('path',{attrs:{"d":"M8.858 24a.744.744 0 01-.718-.534l-2.25-7.5a.752.752 0 011.005-.909l1.867.778L9.459 12H7.536a1.499 1.499 0 01-1.466-1.814l1.928-9A1.506 1.506 0 019.464 0h6.537a1.6 1.6 0 01.561.107 1.502 1.502 0 01.835 1.951L15.216 7.5h1.428a1.49 1.49 0 011.423 1.026c.126.38.097.787-.083 1.145l-4.14 8.281 2.051.855c.264.11.444.365.46.65a.755.755 0 01-.385.698l-6.75 3.75a.728.728 0 01-.362.095zm.45-1.858l4.581-2.545-1.364-.568a.755.755 0 01-.414-.43.756.756 0 01.032-.597l4.5-9L14.107 9a.75.75 0 01-.696-1.028L16.005 1.5h-6.54l-1.929 9h2.822a.749.749 0 01.738.883l-1.024 5.636a.746.746 0 01-.739.616c-.1 0-.197-.02-.288-.058l-1.264-.526 1.527 5.091z"}})])
          )
        }
      }
    