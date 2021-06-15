
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24a3.754 3.754 0 01-3.75-3.75V6.75a3.743 3.743 0 013-3.673V.75a.75.75 0 011.5 0V3h6.75a3.754 3.754 0 013.75 3.75v13.5A3.754 3.754 0 0115.75 24h-7.5zM6 20.25a2.252 2.252 0 002.25 2.25h7.5A2.252 2.252 0 0018 20.25V13.5H6v6.75zM18 12V6.75a2.252 2.252 0 00-2.25-2.25h-7.5A2.252 2.252 0 006 6.75V12h12z"}}),_c('circle',{attrs:{"cx":"10.125","cy":"15.75","r":"1.125"}}),_c('circle',{attrs:{"cx":"14.25","cy":"15.75","r":"1.125"}}),_c('circle',{attrs:{"cx":"10.125","cy":"19.5","r":"1.125"}}),_c('circle',{attrs:{"cx":"14.25","cy":"19.5","r":"1.125"}})])
          )
        }
      }
    