
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
            children.concat([_c('path',{attrs:{"d":"M22.5 21.75a.748.748 0 01-.711-.513L20.46 17.25H3.541l-1.329 3.987a.75.75 0 01-1.424-.475l1.177-3.531A2.252 2.252 0 010 15a2.252 2.252 0 012.25-2.25H4.5v-1.5H2.75c-.689 0-1.25-.561-1.25-1.25V5c0-.689.561-1.25 1.25-1.25H4.5V3A.75.75 0 016 3v.75h12V3a.75.75 0 011.5 0v.75h1.75c.689 0 1.25.561 1.25 1.25v5c0 .689-.561 1.25-1.25 1.25H19.5v1.5h2.25A2.252 2.252 0 0124 15a2.254 2.254 0 01-1.965 2.232l1.177 3.531a.75.75 0 01-.712.987zm-20.25-7.5a.75.75 0 000 1.5h19.5a.75.75 0 000-1.5H2.25zM18 12.75v-1.5H6v1.5h12zm3-3v-1.5H3v1.5h18zm0-3v-1.5H3v1.5h18z"}})])
          )
        }
      }
    