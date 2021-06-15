
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
            children.concat([_c('path',{attrs:{"d":"M12.75 23.25a.752.752 0 01-.53-1.281l9.22-9.22H.75a.749.749 0 110-1.499h20.689l-9.22-9.22A.746.746 0 0112.22.97c.141-.142.33-.22.53-.22s.389.078.53.22l10.5 10.5a.74.74 0 01.163.245l.01.026a.73.73 0 010 .517l-.006.016a.755.755 0 01-.168.257L13.28 23.03a.743.743 0 01-.53.22z"}})])
          )
        }
      }
    