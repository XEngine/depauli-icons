
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
            children.concat([_c('path',{attrs:{"d":"M15.75 13.5a2.252 2.252 0 01-2.25-2.25v-4.5c0-.96.615-1.808 1.5-2.121V3.75C15 1.682 16.682 0 18.75 0s3.75 1.682 3.75 3.75v.879A2.258 2.258 0 0124 6.75v4.5a2.252 2.252 0 01-2.25 2.25h-6zm0-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-6zM21 4.5v-.75c0-1.241-1.009-2.25-2.25-2.25S16.5 2.509 16.5 3.75v.75H21z"}}),_c('circle',{attrs:{"cx":"18.75","cy":"9.029","r":"1.125"}}),_c('path',{attrs:{"d":"M6 24a.75.75 0 010-1.5h1.664l.375-1.5H3.75A3.754 3.754 0 010 17.25V6.75A3.754 3.754 0 013.75 3h7.5a.75.75 0 010 1.5h-7.5A2.252 2.252 0 001.5 6.75v9.75h21v-.75a.75.75 0 011.5 0v1.5A3.754 3.754 0 0120.25 21h-4.29l.375 1.5H18a.75.75 0 010 1.5H6zm8.79-1.5l-.375-1.5H9.586l-.375 1.5h5.579zM1.632 18a2.262 2.262 0 002.118 1.5h16.5c.96 0 1.805-.621 2.118-1.5H1.632z"}})])
          )
        }
      }
    