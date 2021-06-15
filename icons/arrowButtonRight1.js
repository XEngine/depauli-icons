
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
            children.concat([_c('path',{attrs:{"d":"M12.31 24a.752.752 0 01-.53-1.281L22.499 12 11.78 1.28a.744.744 0 010-1.06.743.743 0 01.53-.22c.2 0 .389.078.53.22l10.719 10.72a1.5 1.5 0 01.001 2.119L12.84 23.78a.743.743 0 01-.53.22z"}}),_c('path',{attrs:{"d":"M1.06 24a.752.752 0 01-.53-1.281L11.249 12 .53 1.28A.743.743 0 01.31.75c0-.2.078-.389.22-.53C.671.078.86 0 1.06 0s.389.078.53.22l10.719 10.72c.283.283.439.659.44 1.059s-.155.777-.438 1.06L1.59 23.78a.741.741 0 01-.53.22z"}})])
          )
        }
      }
    