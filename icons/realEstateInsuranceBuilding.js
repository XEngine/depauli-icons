
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0V15H6c1.8 0 3.324 1.268 3.675 3h3.075a3.754 3.754 0 013.75 3.75.75.75 0 01-.75.75H1.5v.75a.75.75 0 01-.75.75zm14.121-3a2.264 2.264 0 00-2.121-1.5H6A.75.75 0 016 18h2.118A2.262 2.262 0 006 16.5H1.5V21h13.371zM8.25 14.25a.75.75 0 010-1.5H9v-7c0-.689.561-1.25 1.25-1.25h2.5v-3c0-.827.673-1.5 1.5-1.5H21c.827 0 1.5.673 1.5 1.5v11.25h.75a.75.75 0 010 1.5h-15zM21 12.75V9h-1.5a.75.75 0 010-1.5H21V6h-1.5a.75.75 0 010-1.5H21v-3h-6.75v3H16c.689 0 1.25.561 1.25 1.25v7H21zm-5.25 0V9H13.5a.75.75 0 010-1.5h2.25V6H10.5v6.75h5.25z"}})])
          )
        }
      }
    