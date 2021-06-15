
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
            children.concat([_c('circle',{attrs:{"cx":"12.25","cy":"2.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"14.125","cy":"6","r":"1.125"}}),_c('circle',{attrs:{"cx":"14.125","cy":"9.75","r":"1.125"}}),_c('circle',{attrs:{"cx":"17.875","cy":"12.75","r":"1.125"}}),_c('circle',{attrs:{"cx":"21.625","cy":"12.75","r":"1.125"}}),_c('circle',{attrs:{"cx":"17.875","cy":"9","r":"1.125"}}),_c('circle',{attrs:{"cx":"10.375","cy":"6","r":"1.125"}}),_c('circle',{attrs:{"cx":"10.375","cy":"9.75","r":"1.125"}}),_c('circle',{attrs:{"cx":"14.125","cy":"13.5","r":"1.125"}}),_c('circle',{attrs:{"cx":"10.375","cy":"13.5","r":"1.125"}}),_c('circle',{attrs:{"cx":"14.125","cy":"17.25","r":"1.125"}}),_c('circle',{attrs:{"cx":"10.375","cy":"17.25","r":"1.125"}}),_c('circle',{attrs:{"cx":"14.125","cy":"21","r":"1.125"}}),_c('circle',{attrs:{"cx":"10.375","cy":"21","r":"1.125"}}),_c('circle',{attrs:{"cx":"6.625","cy":"12.75","r":"1.125"}}),_c('circle',{attrs:{"cx":"2.875","cy":"12.75","r":"1.125"}}),_c('circle',{attrs:{"cx":"6.625","cy":"9","r":"1.125"}})])
          )
        }
      }
    