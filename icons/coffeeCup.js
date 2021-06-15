
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
            children.concat([_c('path',{attrs:{"d":"M.75 21a.75.75 0 010-1.5h4.265A8.295 8.295 0 011.5 12.75v-7.5A2.252 2.252 0 013.75 3h12c.96 0 1.808.615 2.121 1.5h.879A5.275 5.275 0 0124 9.748c-.008 2.889-2.362 5.244-5.248 5.252h-1.065a8.213 8.213 0 01-3.196 4.5h8.76a.75.75 0 11-.001 1.5H.75zm3-16.5a.75.75 0 00-.75.75v7.5c0 3.722 3.028 6.75 6.75 6.75s6.75-3.028 6.75-6.75v-7.5a.75.75 0 00-.75-.75h-12zm15 9a3.77 3.77 0 003.75-3.752A3.77 3.77 0 0018.748 6H18v6.75c0 .247-.012.498-.035.75h.785z"}})])
          )
        }
      }
    