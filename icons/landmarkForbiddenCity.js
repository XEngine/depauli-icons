
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
            children.concat([_c('path',{attrs:{"d":"M1.75 23.625c-.965 0-1.75-.785-1.75-1.75v-6.5a.723.723 0 01.173-.474.618.618 0 01.043-.049c.008-.009.016-.018.025-.025A14.977 14.977 0 003 10.712V8.625h-.659a1.5 1.5 0 01-1.169-2.44 7.043 7.043 0 001.799-4.028l-.501-.502c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l.53.53h15.879l.53-.53a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-.502.502a6.98 6.98 0 001.77 3.994c.243.297.363.629.363.978a1.502 1.502 0 01-1.499 1.496H21v2.086a14.923 14.923 0 002.779 4.132 2.378 2.378 0 01.085.102.754.754 0 01.043.072.69.69 0 01.031.06c.014.033.023.064.032.094a.756.756 0 01.029.202v6.5c0 .965-.785 1.75-1.75 1.75H1.75zm20.5-1.5a.25.25 0 00.25-.25v-5.75h-21v5.75c0 .138.112.25.25.25H3v-2.25c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v2.25H9v-2.75c0-.965.785-1.75 1.75-1.75h2.5c.965 0 1.75.785 1.75 1.75v2.75h1.5v-2.25c0-1.241 1.009-2.25 2.25-2.25S21 18.634 21 19.875v2.25h1.25zm-2.75 0v-2.25a.75.75 0 00-1.5 0v2.25h1.5zm-6 0v-2.75a.25.25 0 00-.25-.25h-2.5a.25.25 0 00-.25.25v2.75h3zm-7.5 0v-2.25a.75.75 0 00-1.5 0v2.25H6zm15.617-7.5a16.462 16.462 0 01-1.845-3H4.228a16.496 16.496 0 01-1.845 3h19.234zm-2.117-4.5v-1.5h-15v1.5h15zm-15.069-7.5a8.509 8.509 0 01-2.089 4.501l1.408-.001h17.91a8.43 8.43 0 01-2.092-4.5H4.431z"}})])
          )
        }
      }
    