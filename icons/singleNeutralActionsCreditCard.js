
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
            children.concat([_c('path',{attrs:{"d":"M12.75 24a2.252 2.252 0 01-2.25-2.25v-6a2.252 2.252 0 012.25-2.25h9A2.252 2.252 0 0124 15.75v6A2.252 2.252 0 0121.75 24h-9zM12 21.75c0 .414.336.75.75.75h9a.75.75 0 00.75-.75V18H12v3.75zm10.5-5.25v-.75a.75.75 0 00-.75-.75h-9a.75.75 0 00-.75.75v.75h10.5z"}}),_c('path',{attrs:{"d":"M17.25 21a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM7.5 9.75c-2.688 0-4.875-2.187-4.875-4.875S4.812 0 7.5 0s4.875 2.187 4.875 4.875S10.188 9.75 7.5 9.75zm0-8.25c-1.861 0-3.375 1.514-3.375 3.375S5.639 8.25 7.5 8.25s3.375-1.514 3.375-3.375S9.361 1.5 7.5 1.5z"}}),_c('path',{attrs:{"d":"M.75 18a.75.75 0 01-.75-.75c.001-4.136 3.367-7.501 7.503-7.501 1.15 0 2.301.27 3.33.779a.75.75 0 01-.332 1.422.754.754 0 01-.333-.078 6.027 6.027 0 00-2.663-.623 6.01 6.01 0 00-6.004 6.001.752.752 0 01-.751.75z"}})])
          )
        }
      }
    