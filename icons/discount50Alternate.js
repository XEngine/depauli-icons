
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
            children.concat([_c('path',{attrs:{"d":"M7.5 12a.75.75 0 010-1.5H9A.75.75 0 009 9h-.75c-.827 0-1.5-.673-1.5-1.5V5.25a.75.75 0 01.75-.75h3a.75.75 0 010 1.5H8.25v1.5H9c1.241 0 2.25 1.009 2.25 2.25S10.241 12 9 12H7.5zM15 12a2.252 2.252 0 01-2.25-2.25v-3c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v3A2.252 2.252 0 0115 12zm0-6a.75.75 0 00-.75.75v3a.75.75 0 001.5 0v-3A.75.75 0 0015 6z"}}),_c('circle',{attrs:{"cx":"10.125","cy":"14.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"13.875","cy":"18.375","r":"1.125"}}),_c('path',{attrs:{"d":"M9.75 19.5a.752.752 0 01-.53-1.281l4.5-4.5a.744.744 0 011.06 0 .752.752 0 010 1.061l-4.5 4.5a.743.743 0 01-.53.22z"}}),_c('path',{attrs:{"d":"M1.75 24C.785 24 0 23.215 0 22.25V1.75C0 .785.785 0 1.75 0h20.5C23.215 0 24 .785 24 1.75v20.5c0 .965-.785 1.75-1.75 1.75H1.75zm0-22.5a.25.25 0 00-.25.25v20.5c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75z"}})])
          )
        }
      }
    