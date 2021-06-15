
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
            children.concat([_c('path',{attrs:{"d":"M18 8.25A2.252 2.252 0 0115.75 6V.747a.75.75 0 011.5 0V6c0 .414.336.75.75.75h5.25a.75.75 0 010 1.5H18zM16.5 24a.75.75 0 01-.75-.75V18A2.252 2.252 0 0118 15.75h5.251a.75.75 0 010 1.5H18a.75.75 0 00-.75.75v5.25a.75.75 0 01-.75.75zM7.5 23.997a.75.75 0 01-.75-.75V18a.75.75 0 00-.75-.75H.751a.75.75 0 010-1.5H6A2.252 2.252 0 018.25 18v5.247a.75.75 0 01-.75.75zM.751 8.25a.75.75 0 010-1.5H6A.75.75 0 006.75 6V.747a.75.75 0 011.5 0V6A2.252 2.252 0 016 8.25H.751z"}})])
          )
        }
      }
    