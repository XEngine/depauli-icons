
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
            children.concat([_c('path',{attrs:{"d":"M23.25 24a.75.75 0 01-.75-.75v-.75h-21v.75a.75.75 0 01-1.5 0V9.75a.75.75 0 011.5 0v2.379c.239-.085.491-.129.75-.129h3a2.252 2.252 0 012.25 2.25V15h14.25a.75.75 0 01.75.75v2.379A2.26 2.26 0 0124 20.25v3a.75.75 0 01-.75.75zm-.75-3v-.75a.75.75 0 00-.75-.75H1.5V21h21zM21 18v-1.5H1.5V18H21zM6 15v-.75a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V15H6zM14.25 10.5a.75.75 0 01-.75-.75v-9a.75.75 0 01.75-.75h9a.75.75 0 01.75.75v9a.75.75 0 01-.75.75h-9zM22.5 9V6h-3v3h3zM18 9V6h-3v3h3zm4.5-4.5v-3h-3v3h3zm-4.5 0v-3h-3v3h3z"}})])
          )
        }
      }
    