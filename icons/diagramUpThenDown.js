
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
            children.concat([_c('path',{attrs:{"d":"M20.25 22.75a.752.752 0 01-.53-1.281l1.72-1.72H9.065c-4.963 0-9-4.037-9-9s4.037-9 9-9H23.25a.75.75 0 010 1.501H9.065c-4.135 0-7.5 3.365-7.5 7.5s3.365 7.5 7.5 7.5h12.374l-1.72-1.72a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l3 3a.74.74 0 01.163.245l.01.026A.718.718 0 0124 19a.767.767 0 01-.046.258l-.006.016a.748.748 0 01-.167.256l-3 3a.747.747 0 01-.531.22z"}})])
          )
        }
      }
    