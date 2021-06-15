
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
            children.concat([_c('circle',{attrs:{"cx":"9","cy":"18.75","r":"1.125"}}),_c('circle',{attrs:{"cx":"15","cy":"18.75","r":"1.125"}}),_c('path',{attrs:{"d":"M4.5 24a2.252 2.252 0 01-2.25-2.25V15H1.5a.75.75 0 010-1.5h2.25V8.25C3.75 3.701 7.451 0 12 0s8.25 3.701 8.25 8.25v5.25h2.25a.75.75 0 010 1.5h-.75v6.75A2.252 2.252 0 0119.5 24h-15zm15-1.5a.75.75 0 00.75-.75V15h-7.5v7.5h6.75zm-15.75-.75c0 .414.336.75.75.75h6.75V15h-7.5v6.75zm15-8.25V8.25c0-3.722-3.028-6.75-6.75-6.75S5.25 4.528 5.25 8.25v5.25h13.5z"}})])
          )
        }
      }
    