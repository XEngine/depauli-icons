
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
            children.concat([_c('path',{attrs:{"d":"M20.25 22.497a.75.75 0 010-1.5c.414 0 .75-.336.75-.75a.75.75 0 011.5 0 2.252 2.252 0 01-2.25 2.25zM21.75 2.997c-.414 0-.75-.336-.75-.75s-.336-.75-.75-.75a.75.75 0 010-1.5 2.252 2.252 0 012.25 2.25.75.75 0 01-.75.75zM.75 2.997a.75.75 0 01-.75-.75 2.252 2.252 0 012.25-2.25.75.75 0 010 1.5c-.414 0-.75.336-.75.75s-.336.75-.75.75zM2.25 22.497A2.252 2.252 0 010 20.247a.75.75 0 011.5 0c0 .414.336.75.75.75a.75.75 0 010 1.5zM5.25 1.497a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM15.75 1.497a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM5.25 22.497a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM15.75 22.497a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM.75 7.497a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM.75 17.997a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM21.75 7.497a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM9.75 22.497a.75.75 0 010-1.5h.75v-9h-9v.75a.75.75 0 01-1.5 0v-3a.75.75 0 011.5 0v.75h9v-9h-.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5H12v9h9v-.75a.75.75 0 011.5 0v3a.75.75 0 01-1.5 0v-.75h-9v9h.75a.75.75 0 010 1.5h-3zM21.75 17.997a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    