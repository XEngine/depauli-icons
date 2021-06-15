
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
            children.concat([_c('path',{attrs:{"d":"M23.25 24a.75.75 0 01-.75-.75V18h-21v5.25a.75.75 0 01-1.5 0v-18A2.252 2.252 0 012.25 3h1.502A3.725 3.725 0 013 .75.75.75 0 013.75 0h6a.75.75 0 01.75.75c0 .823-.267 1.607-.752 2.25H21.75A2.252 2.252 0 0124 5.25v18a.75.75 0 01-.75.75zm-.75-7.5v-3h-9.75v3h9.75zm-11.25 0v-3H1.5v3h9.75zM22.5 12V9h-.75a.75.75 0 010-1.5h.75V5.25a.75.75 0 00-.75-.75H16.5v3h.75a.75.75 0 010 1.5h-.75v3h6zM15 12V9h-.75a.75.75 0 010-1.5H15v-3H9v3h.75a.75.75 0 010 1.5H9v3h6zm-7.5 0V9h-.75a.75.75 0 010-1.5h.75v-3H2.25a.75.75 0 00-.75.75V7.5h.75a.75.75 0 010 1.5H1.5v3h6zM4.629 1.5C4.942 2.379 5.788 3 6.75 3s1.808-.621 2.121-1.5H4.629z"}}),_c('path',{attrs:{"d":"M20.25 24a.746.746 0 01-.671-.415L18.286 21h-2.073l-1.293 2.585a.744.744 0 01-1.004.336.75.75 0 01-.336-1.006L14.536 21h-.286a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-.286l.957 1.915A.751.751 0 0120.25 24z"}})])
          )
        }
      }
    