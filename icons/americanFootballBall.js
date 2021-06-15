
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
            children.concat([_c('path',{attrs:{"d":"M18.75 24a.75.75 0 01-.75-.75V18c0-.96.615-1.808 1.5-2.121V12.75h-15v3.129A2.258 2.258 0 016 18v5.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75V18c0-.96.615-1.808 1.5-2.121V.75a.75.75 0 011.5 0v10.5h15V.75a.75.75 0 011.5 0v15.129A2.26 2.26 0 0122.5 18v5.25a.75.75 0 01-.75.75h-3zM21 22.5V18a.75.75 0 00-1.5 0v4.5H21zm-16.5 0V18A.75.75 0 003 18v4.5h1.5z"}})])
          )
        }
      }
    