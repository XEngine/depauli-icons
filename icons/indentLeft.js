
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
            children.concat([_c('path',{attrs:{"d":"M3.75 15.748a.752.752 0 01-.53-1.281l1.72-1.72H.75a.75.75 0 010-1.5h4.189l-1.72-1.72C3.078 9.387 3 9.198 3 8.998s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l3 3a.74.74 0 01.163.245l.01.026a.75.75 0 01-.001.52l-.007.021a.754.754 0 01-.166.25L4.28 15.528a.743.743 0 01-.53.22zM9.75 23.248a.75.75 0 01-.75-.75v-21a.75.75 0 011.5 0v21a.75.75 0 01-.75.75zM12.75 3.748a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5h-10.5zM12.75 8.248a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5zM12.75 12.748a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5h-10.5zM12.75 17.248a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5zM12.75 21.748a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5h-10.5z"}})])
          )
        }
      }
    