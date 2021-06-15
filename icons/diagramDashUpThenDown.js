
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
            children.concat([_c('path',{attrs:{"d":"M20.25 23a.749.749 0 01-.53-1.28L21.44 20H9.015a9.005 9.005 0 01-8.99-8.523c-.266-4.959 3.552-9.21 8.51-9.476L8.577 2a.75.75 0 01.039 1.499 7.452 7.452 0 00-5.182 2.48 7.459 7.459 0 00-1.911 5.418A7.506 7.506 0 009.017 18.5h12.422l-1.72-1.72a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l3 3a.74.74 0 01.163.245l.01.026a.718.718 0 01.048.26.767.767 0 01-.046.258l-.006.017a.758.758 0 01-.167.256l-3 3a.75.75 0 01-.531.219zM12.451 3.5a.75.75 0 010-1.5h1.971a.75.75 0 010 1.5h-1.971zM17.106 3.5a.75.75 0 010-1.5h1.709a.75.75 0 010 1.5h-1.709zM21.173 3.5a.75.75 0 010-1.5h2.077a.75.75 0 010 1.5h-2.077z"}})])
          )
        }
      }
    