
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
            children.concat([_c('path',{attrs:{"d":"M15.75 14.986a2.252 2.252 0 01-2.25-2.25v-4.5c0-.96.615-1.808 1.5-2.121v-.879c0-2.068 1.682-3.75 3.75-3.75s3.75 1.682 3.75 3.75v.879A2.258 2.258 0 0124 8.236v4.5a2.252 2.252 0 01-2.25 2.25h-6zm0-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-6zm5.25-1.5v-.75c0-1.241-1.009-2.25-2.25-2.25s-2.25 1.009-2.25 2.25v.75H21z"}}),_c('circle',{attrs:{"cx":"18.75","cy":"10.515","r":"1.125"}}),_c('path',{attrs:{"d":"M3.75 22.515A3.754 3.754 0 010 18.765v-6a3.754 3.754 0 013.75-3.75h7.5a.75.75 0 010 1.5h-7.5a2.252 2.252 0 00-2.25 2.25v6a2.252 2.252 0 002.25 2.25H16.5v-3.75a.75.75 0 011.5 0v3.75h.75a2.252 2.252 0 002.25-2.25v-1.5a.75.75 0 011.5 0v1.5a3.754 3.754 0 01-3.75 3.75h-15z"}})])
          )
        }
      }
    