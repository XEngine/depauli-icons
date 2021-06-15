
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
            children.concat([_c('path',{attrs:{"d":"M21.744 23.842c-.262 0-.521-.046-.771-.137a27.29 27.29 0 00-8.995-1.797 27.19 27.19 0 00-8.94 1.793 2.257 2.257 0 01-2.896-1.337 2.238 2.238 0 01-.059-1.359L1.5 15.81v-3.651a10.46 10.46 0 019.75-10.471v-.78a.75.75 0 011.5 0v.779a10.46 10.46 0 019.75 10.471v3.651l1.417 5.193a2.236 2.236 0 01-.221 1.71 2.236 2.236 0 01-1.364 1.051c-.192.052-.39.079-.588.079zM12 20.409c3.264.093 6.459.729 9.498 1.891a.718.718 0 00.442.016.751.751 0 00.528-.919l-1.33-4.875a41.465 41.465 0 00-9.139-1.361 41.465 41.465 0 00-9.139 1.361l-1.33 4.876a.748.748 0 00.726.944.728.728 0 00.256-.046 28.716 28.716 0 019.466-1.887H12zm0-17.251c-4.963 0-9 4.037-9 9v2.782a42.988 42.988 0 018.973-1.28l.027-.001.034.001c3.005.106 6.021.537 8.966 1.28v-2.782c0-4.962-4.037-9-9-9z"}}),_c('path',{attrs:{"d":"M12.004 12.158c-2.068 0-3.75-1.682-3.75-3.75s1.682-3.75 3.75-3.75 3.75 1.682 3.75 3.75-1.682 3.75-3.75 3.75zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25-1.009-2.25-2.25-2.25z"}})])
          )
        }
      }
    