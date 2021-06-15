
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
            children.concat([_c('circle',{attrs:{"cx":"7.875","cy":"15.375","r":"1.125"}}),_c('circle',{attrs:{"cx":"12","cy":"15.375","r":"1.125"}}),_c('circle',{attrs:{"cx":"16.125","cy":"15.375","r":"1.125"}}),_c('circle',{attrs:{"cx":"7.875","cy":"19.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"12","cy":"19.125","r":"1.125"}}),_c('path',{attrs:{"d":"M16.125 20.25c-.62 0-1.125-.505-1.125-1.125a1.127 1.127 0 011.171-1.122l.027.003a1.118 1.118 0 011.052 1.12c0 .619-.505 1.124-1.125 1.124z"}}),_c('path',{attrs:{"d":"M5.25 24A2.252 2.252 0 013 21.75V2.25A2.252 2.252 0 015.25 0h13.5A2.252 2.252 0 0121 2.25v19.5A2.252 2.252 0 0118.75 24H5.25zm-.75-2.25c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V12h-15v9.75zm15-11.25V2.25a.75.75 0 00-.75-.75H5.25a.75.75 0 00-.75.75v8.25h15z"}})])
          )
        }
      }
    