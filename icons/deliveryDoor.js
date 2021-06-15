
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
            children.concat([_c('path',{attrs:{"d":"M14.927 24c-.787 0-1.427-.64-1.427-1.427v-6.896c0-.787.64-1.427 1.427-1.427h7.646c.787 0 1.427.64 1.427 1.427v6.896C24 23.36 23.36 24 22.573 24h-7.646zm7.573-1.5v-6.75H21v3.75a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3.75H15v6.75h7.5zm-3-3.75v-3H18v3h1.5z"}}),_c('path',{attrs:{"d":"M1.5 24C.673 24 0 23.327 0 22.5V21c0-.827.673-1.5 1.5-1.5V2.25A2.252 2.252 0 013.75 0h12A2.252 2.252 0 0118 2.25V12a.75.75 0 01-1.5 0V2.25a.75.75 0 00-.75-.75h-12a.75.75 0 00-.75.75V19.5h8.25a.75.75 0 010 1.5H1.5v1.5h9.75a.75.75 0 010 1.5H1.5z"}}),_c('circle',{attrs:{"cx":"13.5","cy":"9.75","r":"1.125"}})])
          )
        }
      }
    