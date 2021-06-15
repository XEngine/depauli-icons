
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
            children.concat([_c('path',{attrs:{"d":"M4.75 16.499c-.965 0-1.75-.785-1.75-1.75v-10c0-.965.785-1.75 1.75-1.75h4.327c.351-1.732 1.874-3 3.673-3s3.323 1.268 3.673 3h4.327c.965 0 1.75.785 1.75 1.75v10c0 .965-.785 1.75-1.75 1.75h-16zm16-1.5a.25.25 0 00.25-.25v-10a.25.25 0 00-.25-.25H18l2.75 10.5zm-4.25 0v-10.5H9l7.5 10.5zM4.75 4.499a.25.25 0 00-.25.25v10c0 .138.112.25.25.25H7.5v-10.5H4.75zm10.118-1.5c-.313-.879-1.158-1.5-2.118-1.5s-1.805.621-2.118 1.5h4.236zM3 23.999c-1.654 0-3-1.346-3-3s1.346-3 3-3h20.25a.75.75 0 010 1.5H3c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h20.25a.75.75 0 010 1.5H3z"}}),_c('path',{attrs:{"d":"M6.75 22.124a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25z"}}),_c('circle',{attrs:{"cx":"11.25","cy":"20.999","r":"1.125"}}),_c('circle',{attrs:{"cx":"15.75","cy":"20.999","r":"1.125"}}),_c('circle',{attrs:{"cx":"20.25","cy":"20.999","r":"1.125"}})])
          )
        }
      }
    