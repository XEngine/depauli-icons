
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
            children.concat([_c('path',{attrs:{"d":"M.75 18.002a.752.752 0 01-.75-.75c.003-4.134 3.369-7.498 7.503-7.498a7.488 7.488 0 012.941.6.745.745 0 01.402.41.748.748 0 01-.696 1.03c-.101 0-.2-.02-.294-.06a5.964 5.964 0 00-2.349-.48A6.011 6.011 0 001.5 17.253a.75.75 0 01-.75.749zM7.5 9.752c-2.688 0-4.875-2.187-4.875-4.875S4.812.002 7.5.002s4.875 2.187 4.875 4.875S10.188 9.752 7.5 9.752zm0-8.25c-1.861 0-3.375 1.514-3.375 3.375S5.639 8.252 7.5 8.252s3.375-1.514 3.375-3.375S9.361 1.502 7.5 1.502zM17.4 24.006a6.33 6.33 0 01-2.052-.344A6.292 6.292 0 0112 20.976v1.525a.75.75 0 01-1.5 0v-3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-2.067a4.826 4.826 0 004.466 3.003c.735 0 1.448-.167 2.117-.495a4.791 4.791 0 002.44-2.769.751.751 0 011.383-.088c.088.18.101.384.036.573a6.28 6.28 0 01-3.199 3.63 6.216 6.216 0 01-2.776.651zM19.5 16.502a.75.75 0 010-1.5h2.066a4.826 4.826 0 00-4.457-3.001 4.825 4.825 0 00-4.566 3.261.75.75 0 11-1.419-.485 6.327 6.327 0 018.028-3.935 6.29 6.29 0 013.349 2.688v-1.527A.75.75 0 0124 12.002v3.75a.75.75 0 01-.75.75H19.5z"}})])
          )
        }
      }
    