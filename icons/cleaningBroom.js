
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
            children.concat([_c('path',{attrs:{"d":"M18.879 19.538a.743.743 0 01-.53-.22l-3.022-3.022c-1.083-1.082-1.863-2.353-2.197-3.579-.286-1.047-.23-1.974.157-2.703L4.72 1.447c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l8.566 8.566c.42-.223.908-.336 1.456-.336.394 0 .814.06 1.248.179 1.225.334 2.496 1.115 3.579 2.197l3.022 3.022a.744.744 0 010 1.06.749.749 0 01-1.06 0l-3.022-3.022c-.901-.901-1.935-1.544-2.913-1.81a3.233 3.233 0 00-.845-.125c-.098 0-.192.006-.281.018l6 6a.752.752 0 01-.53 1.281.743.743 0 01-.53-.22l-6-6c-.044.321-.008.701.107 1.126.267.978.91 2.013 1.811 2.913l3.022 3.022a.75.75 0 01-.531 1.28z"}}),_c('circle',{attrs:{"cx":"22.5","cy":"22.667","r":"1.125"}}),_c('circle',{attrs:{"cx":"1.5","cy":"22.667","r":"1.125"}}),_c('circle',{attrs:{"cx":"12.75","cy":"22.667","r":"1.125"}}),_c('circle',{attrs:{"cx":"3","cy":"15.917","r":"1.125"}}),_c('circle',{attrs:{"cx":"7.5","cy":"19.667","r":"1.125"}}),_c('circle',{attrs:{"cx":"10.5","cy":"15.167","r":"1.125"}})])
          )
        }
      }
    