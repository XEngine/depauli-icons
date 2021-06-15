
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
            children.concat([_c('path',{attrs:{"d":"M6.25 9C5.285 9 4.5 8.215 4.5 7.25v-5A2.252 2.252 0 016.75 0h16.5a.75.75 0 010 1.5H6.75a.75.75 0 00-.75.75V4.5h17.25a.75.75 0 010 1.5H12v1.25C12 8.215 11.215 9 10.25 9h-4zM6 7.25c0 .138.112.25.25.25h4a.25.25 0 00.25-.25V6H6v1.25zM3.574 24a2.253 2.253 0 01-2.232-1.971L.006 11.343A.746.746 0 01.75 10.5c.377 0 .697.282.744.657L2.83 21.843a.752.752 0 00.744.657h7.852a.751.751 0 00.744-.657l1.336-10.686a.752.752 0 01.837-.651.751.751 0 01.652.837l-1.336 10.686A2.254 2.254 0 0111.427 24H3.574z"}}),_c('circle',{attrs:{"cx":"5.25","cy":"18","r":"1.125"}}),_c('circle',{attrs:{"cx":"9.75","cy":"18","r":"1.125"}}),_c('circle',{attrs:{"cx":"7.5","cy":"13.5","r":"1.125"}})])
          )
        }
      }
    