
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
            children.concat([_c('path',{attrs:{"d":"M11.25 19.5a5.39 5.39 0 01-4.492-2.404l-2.569-3.854a1.875 1.875 0 01.097-2.217 1.867 1.867 0 011.47-.706c.429 0 .834.143 1.172.413l.572.458V8.253a3.752 3.752 0 014.937-3.558l3 1a3.746 3.746 0 012.562 3.558v5.738a4.488 4.488 0 01-1.319 3.189 4.482 4.482 0 01-3.19 1.32h-2.24zm-5.495-7.681l-.042.002a.375.375 0 00-.255.14l-.02.027a.378.378 0 000 .421l2.569 3.854A3.888 3.888 0 0011.25 18h2.239c.805 0 1.561-.313 2.13-.881.567-.568.88-1.324.88-2.128V9.253c0-.969-.617-1.827-1.537-2.135l-3-1A2.249 2.249 0 009 8.253v4.5a.754.754 0 01-.749.75.753.753 0 01-.469-.165L5.99 11.902a.374.374 0 00-.235-.083z"}}),_c('path',{attrs:{"d":"M6.75 24a.743.743 0 01-.53-.22l-6-6a.751.751 0 01-.22-.53V6.75c0-.2.078-.389.22-.53l6-6A.743.743 0 016.75 0h10.5c.198 0 .391.08.53.22l6 6c.142.141.22.33.22.53v10.5c0 .198-.08.391-.22.53l-6 6a.755.755 0 01-.53.22H6.75zm10.189-1.5l5.561-5.561V7.061L16.939 1.5H7.061L1.5 7.061v9.879l5.561 5.56h9.878z"}})])
          )
        }
      }
    