
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
            children.concat([_c('path',{attrs:{"d":"M18.75 23.247a.747.747 0 01-.631-.344L12 13.384l-6.119 9.519a.747.747 0 01-1.036.225.751.751 0 01-.225-1.037l6.007-9.344H.75a.75.75 0 010-1.5h9.876L4.619 1.902A.748.748 0 015.25.746c.256 0 .492.129.631.345L12 10.61l6.119-9.519a.746.746 0 011.036-.225.75.75 0 01.225 1.037l-6.007 9.344h9.876a.75.75 0 010 1.5h-9.876l6.007 9.344a.751.751 0 01-.63 1.156z"}})])
          )
        }
      }
    