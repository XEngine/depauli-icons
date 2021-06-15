
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
            children.concat([_c('circle',{attrs:{"cx":"20.625","cy":"11.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"17.625","cy":"16.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"14.625","cy":"3.375","r":"1.125"}}),_c('circle',{attrs:{"cx":"14.625","cy":"11.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"8.625","cy":"11.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"2.625","cy":"11.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"17.625","cy":"7.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"14.625","cy":"19.875","r":"1.125"}})])
          )
        }
      }
    