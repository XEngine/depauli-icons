
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
            children.concat([_c('path',{attrs:{"d":"M20.25 24a.75.75 0 01-.75-.75v-.75h-15v.75a.75.75 0 01-1.5 0v-.75h-.75A2.252 2.252 0 010 20.25v-15A2.252 2.252 0 012.25 3h19.5A2.252 2.252 0 0124 5.25v15a2.252 2.252 0 01-2.25 2.25H21v.75a.75.75 0 01-.75.75zm-18-19.5a.75.75 0 00-.75.75v15c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M6.75 19.5a2.252 2.252 0 01-2.25-2.25v-.75h-.75a.75.75 0 010-1.5h.75v-3h-.75a.75.75 0 010-1.5h.75V8.25A2.252 2.252 0 016.75 6h12A2.252 2.252 0 0121 8.25v9a2.252 2.252 0 01-2.25 2.25h-12zM6 17.25c0 .414.336.75.75.75h12a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-12a.75.75 0 00-.75.75v2.25h.75a.75.75 0 010 1.5H6v3h.75a.75.75 0 010 1.5H6v.75z"}}),_c('circle',{attrs:{"cx":"13.875","cy":"14.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"16.875","cy":"14.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"13.875","cy":"10.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"16.875","cy":"10.875","r":"1.125"}})])
          )
        }
      }
    