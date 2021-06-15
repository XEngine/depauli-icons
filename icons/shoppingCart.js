
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
            children.concat([_c('path',{attrs:{"d":"M6 19.875a.75.75 0 010-1.5h9.921a.75.75 0 00.74-.625l.404-2.375H5.882a3.745 3.745 0 01-3.638-2.84l-1.45-5.8c-.097-.389-.037-.792.169-1.136a1.49 1.49 0 011.286-.729h16.602l.446-2.621A2.245 2.245 0 0121.515.377h.985a.75.75 0 010 1.5h-.984a.75.75 0 00-.74.624l-2.637 15.5a2.244 2.244 0 01-2.218 1.873H6zm-2.301-7.704a2.246 2.246 0 002.182 1.704h11.438l1.277-7.504H2.25l1.449 5.8z"}}),_c('circle',{attrs:{"cx":"7.875","cy":"21.75","r":"1.125"}}),_c('circle',{attrs:{"cx":"15.375","cy":"21.75","r":"1.125"}}),_c('path',{attrs:{"d":"M6 11.625a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0v2.25c0 .413-.337.75-.75.75zM10.5 11.625a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0v2.25c0 .413-.337.75-.75.75zM15 11.625a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0v2.25c0 .413-.337.75-.75.75z"}})])
          )
        }
      }
    