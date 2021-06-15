
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
            children.concat([_c('circle',{attrs:{"cx":"21.375","cy":"11.75","r":"1.125"}}),_c('circle',{attrs:{"cx":"18","cy":"13.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"14.25","cy":"13.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"11.25","cy":"17.375","r":"1.125"}}),_c('circle',{attrs:{"cx":"11.25","cy":"21.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"15","cy":"17.375","r":"1.125"}}),_c('circle',{attrs:{"cx":"18","cy":"9.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"14.25","cy":"9.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"10.5","cy":"13.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"10.5","cy":"9.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"6.75","cy":"13.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"6.75","cy":"9.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"3","cy":"13.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"3","cy":"9.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"11.25","cy":"6.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"11.25","cy":"2.375","r":"1.125"}}),_c('circle',{attrs:{"cx":"15","cy":"6.125","r":"1.125"}})])
          )
        }
      }
    