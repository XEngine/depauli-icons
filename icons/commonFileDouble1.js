
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24a2.252 2.252 0 01-2.25-2.25V5.25a.75.75 0 011.5 0v16.5c0 .414.336.75.75.75h13.5a.75.75 0 010 1.5H3.75z"}}),_c('path',{attrs:{"d":"M6.25 21c-.965 0-1.75-.785-1.75-1.75V1.75C4.5.785 5.285 0 6.25 0h14.5c.965 0 1.75.785 1.75 1.75v17.5c0 .965-.785 1.75-1.75 1.75H6.25zm0-19.5a.25.25 0 00-.25.25v17.5c0 .138.112.25.25.25h14.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H6.25z"}})])
          )
        }
      }
    