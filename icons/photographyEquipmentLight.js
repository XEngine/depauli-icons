
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
            children.concat([_c('path',{attrs:{"d":"M5.125 15.75c-.965 0-1.75-.785-1.75-1.75V1.75C3.375.785 4.16 0 5.125 0h13.75c.965 0 1.75.785 1.75 1.75V14c0 .965-.785 1.75-1.75 1.75H5.125zm0-14.25a.25.25 0 00-.25.25V14c0 .138.112.25.25.25h13.75a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H5.125z"}}),_c('path',{attrs:{"d":"M10.875 24a.75.75 0 01-.75-.75v-4.5H3.2a2.84 2.84 0 01-2.821-2.854V7.5a.75.75 0 011.5 0v8.4a1.339 1.339 0 001.326 1.35H20.8c.354-.003.689-.144.94-.399.251-.254.388-.59.385-.946V7.5a.75.75 0 011.5 0v8.4c.005.752-.285 1.465-.817 2.005s-1.242.84-1.998.845h-6.185V21h1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-1.5 0h-1.5v.75a.75.75 0 01-.75.75h-3zm2.25-1.5v-3.75h-1.5v3.75h1.5z"}}),_c('circle',{attrs:{"cx":"7.5","cy":"4.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"12","cy":"4.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"16.5","cy":"4.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"7.5","cy":"10.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"12","cy":"10.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"16.5","cy":"10.125","r":"1.125"}})])
          )
        }
      }
    