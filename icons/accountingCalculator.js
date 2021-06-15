
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24A2.252 2.252 0 013 21.75V2.25A2.252 2.252 0 015.25 0h13.5A2.252 2.252 0 0121 2.25v19.5A2.252 2.252 0 0118.75 24H5.25zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75H5.25z"}}),_c('path',{attrs:{"d":"M7.5 9C6.673 9 6 8.327 6 7.5v-3C6 3.673 6.673 3 7.5 3h9c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-9zm0-1.5h9v-3h-9v3z"}}),_c('circle',{attrs:{"cx":"7.875","cy":"12.375","r":"1.125"}}),_c('circle',{attrs:{"cx":"12.156","cy":"12.375","r":"1.125"}}),_c('circle',{attrs:{"cx":"16.125","cy":"12.375","r":"1.125"}}),_c('circle',{attrs:{"cx":"7.875","cy":"16.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"12.156","cy":"16.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"16.125","cy":"16.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"7.875","cy":"19.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"12.156","cy":"19.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"16.125","cy":"19.875","r":"1.125"}})])
          )
        }
      }
    