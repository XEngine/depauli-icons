
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
            children.concat([_c('path',{attrs:{"d":"M2.75 24A2.754 2.754 0 010 21.25V2.75A2.754 2.754 0 012.75 0h18.5A2.754 2.754 0 0124 2.75v18.5A2.754 2.754 0 0121.25 24H2.75zm0-22.5c-.689 0-1.25.561-1.25 1.25v18.5c0 .689.561 1.25 1.25 1.25h18.5c.689 0 1.25-.561 1.25-1.25V2.75c0-.689-.561-1.25-1.25-1.25H2.75z"}}),_c('circle',{attrs:{"cx":"12","cy":"4.5","r":"1.125"}}),_c('circle',{attrs:{"cx":"13.875","cy":"7.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"13.875","cy":"11.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"17.625","cy":"11.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"10.125","cy":"7.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"10.125","cy":"11.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"13.875","cy":"15.375","r":"1.125"}}),_c('circle',{attrs:{"cx":"10.125","cy":"15.375","r":"1.125"}}),_c('circle',{attrs:{"cx":"13.875","cy":"19.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"10.125","cy":"19.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"6.375","cy":"11.625","r":"1.125"}})])
          )
        }
      }
    