
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
            children.concat([_c('path',{attrs:{"d":"M9 8.25a.75.75 0 01-.75-.75V5.25a.75.75 0 011.5 0V7.5a.75.75 0 01-.75.75zM9 19.5a.75.75 0 01-.75-.75V16.5a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75zM20.25 19.5a.75.75 0 01-.75-.75V16.5a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M1.75 24C.785 24 0 23.215 0 22.25V1.75C0 .785.785 0 1.75 0h20.5C23.215 0 24 .785 24 1.75v20.5c0 .965-.785 1.75-1.75 1.75H1.75zm20.5-1.5a.25.25 0 00.25-.25v-9.5h-9.75v9.75h9.5zM1.5 22.25c0 .138.112.25.25.25h9.5v-9.75H1.5v9.5zm21-11V9.154l-1.876-4.377-1.647.823 2.511 5.65H22.5zm-2.654 0L18.75 8.784v2.466h1.096zm-2.596 0V6h-1.5v5.25h1.5zm-3 0V6h-1.5v5.25h1.5zm-3 0V1.5h-9.5a.25.25 0 00-.25.25v9.5h9.75zM21 3a.748.748 0 01.689.455l.811 1.891V1.75a.25.25 0 00-.25-.25h-9.5v3h5.073l2.842-1.421A.747.747 0 0121 3z"}})])
          )
        }
      }
    