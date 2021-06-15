
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
            children.concat([_c('path',{attrs:{"d":"M2.25 22.497A2.252 2.252 0 010 20.247v-18a2.252 2.252 0 012.25-2.25h18a2.252 2.252 0 012.25 2.25v18a2.252 2.252 0 01-2.25 2.25h-18zm18-1.5a.75.75 0 00.75-.75v-8.25h-.75a.75.75 0 010-1.5H21v-8.25a.75.75 0 00-.75-.75H12v.75a.75.75 0 01-1.5 0v-.75H2.25a.75.75 0 00-.75.75v8.25h.75a.75.75 0 010 1.5H1.5v8.25c0 .414.336.75.75.75h8.25v-.75a.75.75 0 011.5 0v.75h8.25z"}}),_c('path',{attrs:{"d":"M5.25 11.997a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM11.25 13.497a.75.75 0 01-.75-.75v-.75h-.75a.75.75 0 010-1.5h.75v-.75a.75.75 0 011.5 0v.75h.75a.75.75 0 010 1.5H12v.75a.75.75 0 01-.75.75zM15.75 11.997a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM11.25 7.497a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM11.25 17.997a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    