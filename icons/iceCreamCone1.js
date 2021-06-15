
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
            children.concat([_c('path',{attrs:{"d":"M11.997 23.997a3.042 3.042 0 01-2.783-1.821L5.024 12.6a1.502 1.502 0 011.374-2.101h9.971a2.262 2.262 0 00-2.118-1.5H7.629c-.171 0-.339-.029-.5-.086a1.49 1.49 0 01-.854-.767 1.493 1.493 0 01-.06-1.147 3.757 3.757 0 013.536-2.5h5.123a2.254 2.254 0 00-2.122-1.5 2.252 2.252 0 01-2.25-2.25.75.75 0 011.5 0c0 .414.336.75.75.75a3.756 3.756 0 013.536 2.5 1.502 1.502 0 01-1.414 2H9.751c-.952 0-1.805.603-2.122 1.5h6.622a3.743 3.743 0 013.68 3.036 1.503 1.503 0 011.046 2.064l-4.19 9.576a3.044 3.044 0 01-2.79 1.822zM6.398 11.999l4.19 9.575a1.542 1.542 0 002.826-.001l4.19-9.575H6.4l-.002.001z"}})])
          )
        }
      }
    