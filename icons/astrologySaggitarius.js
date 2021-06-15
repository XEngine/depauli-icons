
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
            children.concat([_c('path',{attrs:{"d":"M.773 24a.743.743 0 01-.53-.22.744.744 0 010-1.06l4.827-4.827-3.756-3.756a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l3.756 3.756L21.463 1.5h-6.761a.75.75 0 01-.001-1.5h8.572a.735.735 0 01.293.06.75.75 0 01.401.405l.01.026a.73.73 0 01.047.259v8.571a.75.75 0 01-1.5 0v-6.76L7.191 17.893l3.756 3.756a.744.744 0 010 1.06.744.744 0 01-1.06 0L6.13 18.954 1.303 23.78a.743.743 0 01-.53.22z"}})])
          )
        }
      }
    