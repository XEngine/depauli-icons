
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
            children.concat([_c('path',{attrs:{"d":"M23.25 21.75a.75.75 0 01-.75-.75v-2.25h-21V21A.75.75 0 010 21v-7.75c0-1.341.963-2.466 2.25-2.702V4.5A2.252 2.252 0 014.5 2.25h15a2.252 2.252 0 012.25 2.25v6.048A2.748 2.748 0 0124 13.25V21a.75.75 0 01-.75.75zm-.75-4.5v-4c0-.689-.561-1.25-1.25-1.25H2.75c-.689 0-1.25.561-1.25 1.25v4h21zm-2.25-6.75v-6a.75.75 0 00-.75-.75h-15a.75.75 0 00-.75.75v6h3v-2c0-.965.785-1.75 1.75-1.75h7c.965 0 1.75.785 1.75 1.75v2h3zm-4.5 0v-2a.25.25 0 00-.25-.25h-7a.25.25 0 00-.25.25v2h7.5z"}})])
          )
        }
      }
    