
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
            children.concat([_c('path',{attrs:{"d":"M13.75 24c-.965 0-1.75-.785-1.75-1.75V13c0-.965.785-1.75 1.75-1.75h8.5c.965 0 1.75.785 1.75 1.75v9.25c0 .965-.785 1.75-1.75 1.75h-8.5zm0-11.25a.25.25 0 00-.25.25v9.25c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V13a.25.25 0 00-.25-.25H18v1.5h.75a.75.75 0 010 1.5H18v1.5h.75a.75.75 0 010 1.5H18v.75a.75.75 0 01-1.5 0v-.75h-.75a.75.75 0 010-1.5h.75v-1.5h-.75a.75.75 0 010-1.5h.75v-1.5h-2.75z"}}),_c('circle',{attrs:{"cx":"3.75","cy":"6","r":"1.125"}}),_c('path',{attrs:{"d":"M2.25 15A2.252 2.252 0 010 12.75V4.5a2.252 2.252 0 012.25-2.25h2.459l.237-.711A2.247 2.247 0 017.081 0h3.838c.97 0 1.828.619 2.135 1.539l.237.711h2.459A2.252 2.252 0 0118 4.5V9a.75.75 0 01-1.5 0V4.5a.75.75 0 00-.75-.75h-3a.75.75 0 01-.712-.513l-.408-1.224a.748.748 0 00-.711-.513H7.081a.748.748 0 00-.711.513l-.409 1.224a.748.748 0 01-.711.513h-3a.75.75 0 00-.75.75v8.25c0 .414.336.75.75.75h7.5a.75.75 0 010 1.5h-7.5z"}}),_c('path',{attrs:{"d":"M9 12c-2.068 0-3.75-1.682-3.75-3.75S6.932 4.5 9 4.5s3.75 1.682 3.75 3.75S11.068 12 9 12zm0-6C7.759 6 6.75 7.009 6.75 8.25S7.759 10.5 9 10.5s2.25-1.009 2.25-2.25S10.241 6 9 6z"}})])
          )
        }
      }
    