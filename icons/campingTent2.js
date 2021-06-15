
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
            children.concat([_c('path',{attrs:{"d":"M2.245 23.25a2.252 2.252 0 01-1.893-3.467L11.076 4.671 9.134 1.934A.752.752 0 019.745.75a.75.75 0 01.612.316l1.638 2.309 1.638-2.309a.753.753 0 011.046-.178.752.752 0 01.178 1.046l-1.942 2.737 10.704 15.084a2.27 2.27 0 01.323 1.72 2.24 2.24 0 01-2.196 1.774H2.245zm19.501-1.5a.751.751 0 00.632-1.156l-9.632-13.57V21.75h9zM1.595 20.623a.752.752 0 00.65 1.127h9V7.024l-9.65 13.599z"}})])
          )
        }
      }
    