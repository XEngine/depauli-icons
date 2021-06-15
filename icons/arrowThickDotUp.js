
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
            children.concat([_c('circle',{attrs:{"cx":"11.875","cy":"2.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"16.375","cy":"5.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"3.625","cy":"8.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"11.875","cy":"8.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"11.875","cy":"14.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"11.875","cy":"20.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"7.375","cy":"5.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"20.125","cy":"8.875","r":"1.125"}})])
          )
        }
      }
    