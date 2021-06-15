
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V5.25A2.252 2.252 0 012.25 3H6V.75a.75.75 0 011.5 0V3h9V.75a.75.75 0 011.5 0V3h3.75A2.252 2.252 0 0124 5.25v16.5A2.252 2.252 0 0121.75 24H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V10.5h-21v11.25zM22.5 9V5.25a.75.75 0 00-.75-.75H18V6a.75.75 0 01-1.5 0V4.5h-9V6A.75.75 0 016 6V4.5H2.25a.75.75 0 00-.75.75V9h21z"}}),_c('circle',{attrs:{"cx":"5.625","cy":"13.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"5.625","cy":"19.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"12","cy":"13.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"12","cy":"19.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"18.375","cy":"13.875","r":"1.125"}}),_c('path',{attrs:{"d":"M18.375 20.25c-.62 0-1.125-.505-1.125-1.125a1.127 1.127 0 011.171-1.122l.027.003a1.118 1.118 0 011.052 1.12c0 .619-.505 1.124-1.125 1.124z"}})])
          )
        }
      }
    