
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v2.379c.239-.085.491-.129.75-.129h3A2.252 2.252 0 017.5 5.25V6h6.75a.75.75 0 010 1.5H1.5V9h12.75a.75.75 0 010 1.5H1.5v6h6.75a.75.75 0 010 1.5H7.5v5.25a.75.75 0 01-.75.75h-6zM6 22.5V18H1.5v4.5H6zM6 6v-.75a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V6H6zM23.25 24a.75.75 0 01-.75-.75V21H18v2.25a.75.75 0 01-1.5 0V3.75a.75.75 0 011.5 0V6h4.5V3.75a.75.75 0 011.5 0v19.5a.75.75 0 01-.75.75zm-.75-4.5v-3H18v3h4.5zm0-4.5v-3H18l4.5 3zm0-4.5v-3H18v3h4.5z"}}),_c('path',{attrs:{"d":"M14.25 24a.75.75 0 01-.75-.75V19.5h-3v3.75a.75.75 0 01-1.5 0V19.5c0-.827.673-1.5 1.5-1.5h3v-3.75a.75.75 0 011.5 0v9a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    