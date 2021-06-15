
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
            children.concat([_c('path',{attrs:{"d":"M23.255 8.25a.75.75 0 01-.75-.75V2.247a.75.75 0 00-.75-.75h-5.25a.75.75 0 010-1.5h5.25a2.252 2.252 0 012.25 2.25V7.5a.75.75 0 01-.75.75zM16.505 23.997a.75.75 0 010-1.5h5.25a.75.75 0 00.75-.75V16.5a.75.75 0 011.5 0v5.247a2.252 2.252 0 01-2.25 2.25h-5.25zM2.255 24a2.252 2.252 0 01-2.25-2.25V16.5a.75.75 0 011.5 0v5.25c0 .414.336.75.75.75h5.25a.75.75 0 010 1.5h-5.25zM.755 8.25a.75.75 0 01-.75-.75V2.247a2.252 2.252 0 012.25-2.25h5.25a.75.75 0 010 1.5h-5.25a.75.75 0 00-.75.75V7.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    