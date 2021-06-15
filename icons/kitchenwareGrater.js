
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
            children.concat([_c('path',{attrs:{"d":"M4.876 24a2.24 2.24 0 01-1.591-.655 2.24 2.24 0 01-.658-1.746L3.838 3.5A3.76 3.76 0 017.579 0h8.844a3.759 3.759 0 013.741 3.5l1.207 18.1.001.026a2.223 2.223 0 01-.561 1.61 2.24 2.24 0 01-1.688.764H4.876zm-.752-2.3a.744.744 0 00.219.582.75.75 0 00.529.218h14.251l.042-.001a.753.753 0 00.71-.801L18.828 6H5.174l-1.05 15.7zM18.728 4.5l-.06-.9a2.255 2.255 0 00-2.244-2.1H7.579c-1.18 0-2.166.923-2.245 2.1l-.06.9h13.454z"}}),_c('circle',{attrs:{"cx":"8.251","cy":"7.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"12.001","cy":"7.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"9.751","cy":"10.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"14.251","cy":"10.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"15.751","cy":"7.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"8.251","cy":"13.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"12.001","cy":"13.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"9.751","cy":"16.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"14.251","cy":"16.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"15.751","cy":"13.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"8.251","cy":"19.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"12.001","cy":"19.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"15.751","cy":"19.875","r":"1.125"}})])
          )
        }
      }
    