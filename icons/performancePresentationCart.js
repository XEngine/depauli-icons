
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
            children.concat([_c('path',{attrs:{"d":"M15.079 23.998a.744.744 0 01-.449-.15L12 21.875l-2.628 1.972a.753.753 0 01-1.193-.706.742.742 0 01.293-.494l2.778-2.084v-1.875h-9.5c-.965 0-1.75-.785-1.75-1.75V3.188c0-.965.785-1.75 1.75-1.75h9.5V.75a.75.75 0 011.5 0v.688h9.5c.965 0 1.75.785 1.75 1.75v13.75c0 .965-.785 1.75-1.75 1.75h-9.5v1.875l2.779 2.085a.75.75 0 01-.45 1.35zM1.75 2.938a.25.25 0 00-.25.25v13.75c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V3.188a.25.25 0 00-.25-.25H1.75z"}}),_c('path',{attrs:{"d":"M9.375 12.75a.75.75 0 01-.712-.513l-1.5-4.5a.752.752 0 01.712-.987h8.292l.74-2.466a.754.754 0 01.935-.503.748.748 0 01.502.933l-2.25 7.5a.745.745 0 01-.718.534H9.375zm5.442-1.5l.9-3H8.916l1 3h4.901z"}}),_c('circle',{attrs:{"cx":"9.75","cy":"14.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"15","cy":"14.625","r":"1.125"}})])
          )
        }
      }
    