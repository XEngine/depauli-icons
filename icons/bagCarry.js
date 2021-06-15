
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
            children.concat([_c('path',{attrs:{"d":"M2.751 19.5a2.754 2.754 0 01-2.75-2.75V6.25c0-.965.785-1.75 1.75-1.75h17.5c.965 0 1.75.785 1.75 1.75v1.856l2.946 7.366a.747.747 0 01-.418.975.744.744 0 01-.974-.418l-1.554-3.884v4.606a2.754 2.754 0 01-2.75 2.75h-15.5zm-1.25-2.75c0 .689.561 1.25 1.25 1.25h15.5c.689 0 1.25-.561 1.25-1.25V13.5h-4.763a4.442 4.442 0 01-1.537 2.1 4.465 4.465 0 01-2.695.898A4.524 4.524 0 016.901 14.7a4.459 4.459 0 01-.641-1.2H1.501v3.25zM9.001 9a.753.753 0 01-.3.6 2.979 2.979 0 00-1.17 1.976 2.98 2.98 0 00.57 2.224 2.978 2.978 0 002.404 1.199c.653 0 1.274-.207 1.796-.599a2.978 2.978 0 001.168-1.976A2.982 2.982 0 0012.3 9.6.753.753 0 0112 9V6H9v3zm10.5 3V6.25a.25.25 0 00-.25-.25h-5.75v2.646A4.477 4.477 0 0114.995 12h4.506zM6.003 12a4.483 4.483 0 011.498-3.354V6h-5.75a.25.25 0 00-.25.25V12h4.502z"}}),_c('circle',{attrs:{"cx":"10.501","cy":"12","r":"1.125"}})])
          )
        }
      }
    