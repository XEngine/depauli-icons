
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
            children.concat([_c('path',{attrs:{"d":"M6 24a.75.75 0 010-1.5h1.664l.375-1.5H3.75A3.754 3.754 0 010 17.25V6.75A3.754 3.754 0 013.75 3a.75.75 0 010 1.5A2.252 2.252 0 001.5 6.75v9.75h21V6.75a2.252 2.252 0 00-2.25-2.25.75.75 0 010-1.5A3.754 3.754 0 0124 6.75v10.5A3.754 3.754 0 0120.25 21h-4.29l.375 1.5H18a.75.75 0 010 1.5H6zm8.79-1.5l-.375-1.5H9.586l-.375 1.5h5.579zM1.632 18a2.262 2.262 0 002.118 1.5h16.5c.96 0 1.805-.621 2.118-1.5H1.632z"}}),_c('circle',{attrs:{"cx":"12","cy":"8.25","r":"1.125"}}),_c('path',{attrs:{"d":"M7.875 12c-.62 0-1.125-.505-1.125-1.125v-5.25c0-.62.505-1.125 1.125-1.125h.375v-.75A3.754 3.754 0 0112 0a3.754 3.754 0 013.75 3.75v.75h.375c.62 0 1.125.505 1.125 1.125v5.25c0 .62-.505 1.125-1.125 1.125h-8.25zm7.875-1.5V6h-7.5v4.5h7.5zm-1.5-6v-.75A2.252 2.252 0 0012 1.5a2.252 2.252 0 00-2.25 2.25v.75h4.5z"}})])
          )
        }
      }
    