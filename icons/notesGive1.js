
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
            children.concat([_c('path',{attrs:{"d":"M15.751 15a.75.75 0 010-1.5h6c.422-.016.765-.389.75-.833v-8.81A.818.818 0 0021.724 3h-2.223v2.25a.75.75 0 01-1.5 0V3h-3v2.25a.75.75 0 01-1.5 0V3h-2.25c-.422.016-.765.389-.75.833V12a.75.75 0 01-1.5 0V3.857c-.042-1.248.955-2.311 2.222-2.357H13.5V.75a.75.75 0 011.5 0v.75h3V.75a.75.75 0 011.5 0v.75h2.25c1.288.046 2.291 1.114 2.25 2.382v8.761c.041 1.248-.956 2.311-2.223 2.356L15.751 15zM.751 24a.75.75 0 010-1.5h3a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75h-3a.75.75 0 010-1.5h3c.96 0 1.808.615 2.121 1.5h4.629c1.8 0 3.325 1.268 3.675 3h3.075a3.754 3.754 0 013.75 3.75.75.75 0 01-.75.75H5.872A2.26 2.26 0 013.751 24h-3zm18.621-3a2.264 2.264 0 00-2.121-1.5h-6.75a.75.75 0 010-1.5h2.118a2.262 2.262 0 00-2.118-1.5h-4.5V21h13.371z"}}),_c('circle',{attrs:{"cx":"2.626","cy":"19.875","r":"1.125"}})])
          )
        }
      }
    