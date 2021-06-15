
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
            children.concat([_c('path',{attrs:{"d":"M17.4 24.006a6.33 6.33 0 01-2.052-.344A6.292 6.292 0 0112 20.976v1.525a.75.75 0 01-1.5 0v-3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-2.067a4.826 4.826 0 004.466 3.003c.735 0 1.448-.167 2.117-.495a4.791 4.791 0 002.44-2.769.751.751 0 011.383-.088c.088.18.101.384.036.573a6.28 6.28 0 01-3.199 3.63 6.216 6.216 0 01-2.776.651zM19.5 16.502a.75.75 0 010-1.5h2.067a4.826 4.826 0 00-4.457-3.001 4.827 4.827 0 00-4.567 3.261.75.75 0 11-1.419-.485 6.327 6.327 0 018.028-3.935 6.292 6.292 0 013.348 2.686v-1.525a.75.75 0 011.5-.001v3.75a.75.75 0 01-.75.75H19.5zM3.75 7.502a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H3.75zM3.75 12.002a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM3.75 16.502a.75.75 0 010-1.5H7.5a.75.75 0 010 1.5H3.75z"}}),_c('path',{attrs:{"d":"M2.25 21.002A2.252 2.252 0 010 18.752v-16.5A2.252 2.252 0 012.25.002h10.629c.601 0 1.165.234 1.59.658l2.872 2.872c.425.426.659.991.659 1.591v2.379a.75.75 0 01-1.5 0V5.123c0-.197-.08-.39-.219-.53l-2.872-2.872a.748.748 0 00-.53-.219H2.25a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75H7.5a.75.75 0 010 1.5H2.25z"}})])
          )
        }
      }
    