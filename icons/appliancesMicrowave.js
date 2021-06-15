
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
            children.concat([_c('path',{attrs:{"d":"M20.25 22.5a.75.75 0 01-.75-.75V19.5h-15v2.25a.75.75 0 01-1.5 0V19.5H1.75C.785 19.5 0 18.715 0 17.75V3.25C0 2.285.785 1.5 1.75 1.5h20.5c.965 0 1.75.785 1.75 1.75v14.5c0 .965-.785 1.75-1.75 1.75H21v2.25a.75.75 0 01-.75.75zM1.75 3a.25.25 0 00-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V3.25a.25.25 0 00-.25-.25H1.75z"}}),_c('path',{attrs:{"d":"M4.852 16.5A1.854 1.854 0 013 14.648V6.352C3 5.331 3.831 4.5 4.852 4.5h9.796c1.021 0 1.852.831 1.852 1.852v8.296a1.854 1.854 0 01-1.852 1.852H4.852zm0-10.5a.353.353 0 00-.352.352v8.296c0 .194.158.352.352.352h9.796a.353.353 0 00.352-.352V6.352A.353.353 0 0014.648 6H4.852z"}}),_c('path',{attrs:{"d":"M12.75 13.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75z"}}),_c('circle',{attrs:{"cx":"19.5","cy":"14.25","r":"1.125"}}),_c('circle',{attrs:{"cx":"19.5","cy":"9.75","r":"1.125"}})])
          )
        }
      }
    