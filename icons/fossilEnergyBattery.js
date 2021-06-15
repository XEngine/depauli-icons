
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
            children.concat([_c('path',{attrs:{"d":"M7 24c-.965 0-1.75-.785-1.75-1.75V4.75C5.25 3.785 6.035 3 7 3h1.25V1.75C8.25.785 9.035 0 10 0h4c.965 0 1.75.785 1.75 1.75V3H17c.965 0 1.75.785 1.75 1.75v17.5c0 .965-.785 1.75-1.75 1.75H7zm-.25-1.75c0 .138.112.25.25.25h10a.25.25 0 00.25-.25V15H6.75v7.25zm10.5-8.75V4.75A.25.25 0 0017 4.5H7a.25.25 0 00-.25.25v8.75h10.5zm-3-10.5V1.75A.25.25 0 0014 1.5h-4a.25.25 0 00-.25.25V3h4.5z"}}),_c('path',{attrs:{"d":"M12 10.5a.75.75 0 01-.75-.75V9h-.75a.75.75 0 010-1.5h.75v-.75a.75.75 0 011.5 0v.75h.75a.75.75 0 010 1.5h-.75v.75a.75.75 0 01-.75.75zM10.5 19.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    