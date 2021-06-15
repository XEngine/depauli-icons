
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
            children.concat([_c('path',{attrs:{"d":"M.75 18a.75.75 0 01-.75-.75c0-4.135 3.365-7.5 7.5-7.5.316 0 .635.02.948.059a.748.748 0 01.652.836.752.752 0 01-.744.658.726.726 0 01-.093-.006A6.007 6.007 0 001.5 17.25a.75.75 0 01-.75.75zM7.5 9.75c-2.688 0-4.875-2.187-4.875-4.875S4.812 0 7.5 0s4.875 2.187 4.875 4.875S10.188 9.75 7.5 9.75zm0-8.25c-1.861 0-3.375 1.514-3.375 3.375S5.639 8.25 7.5 8.25s3.375-1.514 3.375-3.375S9.361 1.5 7.5 1.5zM17.25 24a.758.758 0 01-.165-.018c-3.823-.852-6.593-4.315-6.585-8.233V12.75a2.252 2.252 0 012.25-2.25h9A2.252 2.252 0 0124 12.75v3a8.367 8.367 0 01-6.587 8.232.727.727 0 01-.163.018zm-4.5-12a.75.75 0 00-.75.75v3c-.006 3.154 2.196 5.969 5.25 6.729a6.886 6.886 0 005.25-6.728V12.75a.75.75 0 00-.75-.75h-9z"}}),_c('path',{attrs:{"d":"M17.25 20.25a.75.75 0 01-.75-.75V18H15a.75.75 0 010-1.5h1.5V15a.75.75 0 011.5 0v1.5h1.5a.75.75 0 010 1.5H18v1.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    