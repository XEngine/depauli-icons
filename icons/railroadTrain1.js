
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
            children.concat([_c('path',{attrs:{"d":"M4.75 18.013c-.965 0-1.75-.785-1.75-1.75v-13.5A2.754 2.754 0 015.75.013h12.5A2.754 2.754 0 0121 2.763v13.5c0 .965-.785 1.75-1.75 1.75H4.75zm14.5-1.5a.25.25 0 00.25-.25v-2.75h-3a.75.75 0 010-1.5h3v-1.5h-15v1.5h3a.75.75 0 010 1.5h-3v2.75c0 .138.112.25.25.25h3.036l1.293-2.585a.746.746 0 01.671-.415h4.5c.286 0 .543.159.671.415l1.293 2.585h3.036zm-4.713 0l-.75-1.5h-3.573l-.75 1.5h5.073zm4.963-7.5v-6.25c0-.689-.561-1.25-1.25-1.25h-5.5v7.5h6.75zm-8.25 0v-7.5h-5.5c-.689 0-1.25.561-1.25 1.25v6.25h6.75zM1.5 24.013a.75.75 0 01-.6-1.2l2.25-3a.755.755 0 011.05-.15.75.75 0 01.15 1.05l-2.25 3a.753.753 0 01-.6.3zM22.5 24.013a.753.753 0 01-.6-.3l-2.25-3a.75.75 0 011.2-.9l2.25 3a.75.75 0 01-.6 1.2z"}})])
          )
        }
      }
    