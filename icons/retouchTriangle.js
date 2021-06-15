
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
            children.concat([_c('path',{attrs:{"d":"M4.231 24a2.234 2.234 0 01-1.59-.658 2.25 2.25 0 01-.307-2.802l7.791-12.206a2.238 2.238 0 011.901-1.042 2.26 2.26 0 011.894 1.043l7.745 12.207a2.254 2.254 0 01-1.9 3.452L4.231 24zm7.794-15.208a.745.745 0 00-.635.347L3.598 21.346A.75.75 0 004.23 22.5l15.534-.007a.75.75 0 00.633-1.149L12.655 9.139a.747.747 0 00-.63-.347zM11.994 4.058a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v2.558a.75.75 0 01-.75.75zM8.244 5.895a.75.75 0 01-.409-.121L5.691 4.379a.751.751 0 01.819-1.257l2.143 1.395a.75.75 0 01-.409 1.378zM15.744 5.895a.749.749 0 01-.409-1.379l2.144-1.395a.752.752 0 011.038.22.748.748 0 01-.22 1.038l-2.144 1.395a.752.752 0 01-.409.121z"}})])
          )
        }
      }
    