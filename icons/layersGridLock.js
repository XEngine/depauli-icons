
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
            children.concat([_c('path',{attrs:{"d":"M15.25 24c-.965 0-1.75-.785-1.75-1.75v-5.5c0-.88.653-1.611 1.5-1.732v-.768c0-2.068 1.682-3.75 3.75-3.75s3.75 1.682 3.75 3.75v.768c.847.122 1.5.852 1.5 1.732v5.5c0 .965-.785 1.75-1.75 1.75h-7zm0-7.5a.25.25 0 00-.25.25v5.5c0 .138.112.25.25.25h7a.25.25 0 00.25-.25v-5.5a.25.25 0 00-.25-.25h-7zM21 15v-.75c0-1.241-1.009-2.25-2.25-2.25s-2.25 1.009-2.25 2.25L21 15z"}}),_c('circle',{attrs:{"cx":"18.75","cy":"19.529","r":"1.125"}}),_c('path',{attrs:{"d":"M3.75 19.5A3.754 3.754 0 010 15.75v-12A3.754 3.754 0 013.75 0h12a3.754 3.754 0 013.75 3.75v4.5a.75.75 0 01-1.5 0V7.5h-4.5v5.25a.75.75 0 01-.75.75H7.5V18h3.75a.75.75 0 010 1.5h-7.5zM1.5 15.75A2.252 2.252 0 003.75 18H6v-4.5H1.5v2.25zM12 12V7.5H7.5V12H12zm-6 0V7.5H1.5V12H6zm12-6V3.75a2.252 2.252 0 00-2.25-2.25H13.5V6H18zm-6 0V1.5H7.5V6H12zM6 6V1.5H3.75A2.252 2.252 0 001.5 3.75V6H6z"}})])
          )
        }
      }
    