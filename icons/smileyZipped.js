
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('circle',{attrs:{"cx":"8.25","cy":"9","r":"1.125"}}),_c('circle',{attrs:{"cx":"15.75","cy":"9","r":"1.125"}}),_c('path',{attrs:{"d":"M17.25 18a.75.75 0 01-.75-.75v-.75H15v.75a.75.75 0 01-1.5 0v-.75h-3v.75a.75.75 0 01-1.5 0v-.75H7.5v.75a.75.75 0 01-1.5 0v-.75h-.75a.75.75 0 010-1.5H6v-.75a.75.75 0 011.5 0V15H9v-.75a.75.75 0 011.5 0V15h3v-.75a.75.75 0 011.5 0V15h1.5v-.75a.75.75 0 011.5 0V15h.75a.75.75 0 010 1.5H18v.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    