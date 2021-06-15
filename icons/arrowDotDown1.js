
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
            children.concat([_c('circle',{attrs:{"cx":"12","cy":"21.25","r":"1.125"}}),_c('circle',{attrs:{"cx":"10.125","cy":"17.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"10.125","cy":"14.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"6.375","cy":"11.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"2.625","cy":"11.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"6.375","cy":"14.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"13.875","cy":"17.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"13.875","cy":"14.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"10.125","cy":"10.375","r":"1.125"}}),_c('circle',{attrs:{"cx":"13.875","cy":"10.375","r":"1.125"}}),_c('circle',{attrs:{"cx":"10.125","cy":"6.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"13.875","cy":"6.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"10.125","cy":"2.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"13.875","cy":"2.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"17.625","cy":"11.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"21.375","cy":"11.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"17.625","cy":"14.875","r":"1.125"}})])
          )
        }
      }
    