
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
            children.concat([_c('path',{attrs:{"d":"M6.75 22.763a3.743 3.743 0 01-3.673-3H2.25A2.252 2.252 0 010 17.513v-13.5a2.252 2.252 0 012.25-2.25h10.5a6.758 6.758 0 016.75 6.75v9.75h3.75a.75.75 0 010 1.5H10.423a3.743 3.743 0 01-3.673 3zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25S9 20.254 9 19.013s-1.009-2.25-2.25-2.25zm11.25 1.5v-9.75a5.256 5.256 0 00-5.25-5.25H2.25a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h.827c.351-1.732 1.874-3 3.673-3s3.323 1.268 3.673 3H18z"}}),_c('path',{attrs:{"d":"M4.75 10.763c-.965 0-1.75-.785-1.75-1.75v-2.5c0-.965.785-1.75 1.75-1.75h7c.965 0 1.75.785 1.75 1.75v2.5c0 .965-.785 1.75-1.75 1.75h-7zm7-1.5a.25.25 0 00.25-.25v-2.5a.25.25 0 00-.25-.25H9v3h2.75zm-7-3a.25.25 0 00-.25.25v2.5c0 .138.112.25.25.25H7.5v-3H4.75z"}})])
          )
        }
      }
    