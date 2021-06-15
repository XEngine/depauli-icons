
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
            children.concat([_c('path',{attrs:{"d":"M8.291 20.685c-.545 0-1.011-.39-1.107-.927l-2.08-11.44-1.305 4.784a1.125 1.125 0 01-1.085.829H.75a.75.75 0 010-1.5h1.677l1.664-6.102a1.122 1.122 0 011.38-.79c.417.113.736.461.812.887L8.33 17.689l2.53-11.134a1.12 1.12 0 011.095-.877 1.122 1.122 0 011.109.927l1.931 10.633L16.96 6.425a1.123 1.123 0 012.192-.094l1.664 6.101h2.431a.75.75 0 010 1.5h-2.718c-.506 0-.952-.341-1.085-.829l-1.305-4.784L16.1 19.537a1.129 1.129 0 01-1.108.924 1.122 1.122 0 01-1.107-.925l-1.967-10.86-2.53 11.133a1.122 1.122 0 01-1.097.876z"}})])
          )
        }
      }
    