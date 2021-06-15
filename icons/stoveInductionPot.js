
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
            children.concat([_c('path',{attrs:{"d":"M6 21.75a.75.75 0 01-.75-.75v-.75a.75.75 0 011.5 0V21a.75.75 0 01-.75.75zM9 21.75a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0V21a.75.75 0 01-.75.75zM12 21.75a.75.75 0 01-.75-.75v-.75a.75.75 0 011.5 0V21a.75.75 0 01-.75.75zM18 21.75a.75.75 0 01-.75-.75v-.75a.75.75 0 011.5 0V21a.75.75 0 01-.75.75zM15 21.75a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0V21a.75.75 0 01-.75.75zM4.5 24a.75.75 0 010-1.5h15a.75.75 0 010 1.5h-15zM7 16.5c-.965 0-1.75-.785-1.75-1.75V7.5H3A.75.75 0 013 6h2.25V4.5H4.5a.75.75 0 010-1.5h3.827c.35-1.732 1.874-3 3.673-3s3.323 1.268 3.673 3H19.5a.75.75 0 010 1.5h-.75V6H21a.75.75 0 010 1.5h-2.25v7.25c0 .965-.785 1.75-1.75 1.75H7zm-.25-1.75c0 .138.112.25.25.25h10a.25.25 0 00.25-.25V4.5H6.75v10.25zM14.118 3C13.805 2.121 12.96 1.5 12 1.5s-1.805.621-2.118 1.5h4.236z"}})])
          )
        }
      }
    