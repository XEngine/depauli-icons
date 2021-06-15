
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
            children.concat([_c('path',{attrs:{"d":"M6 22.5A.75.75 0 016 21h1.615l.5-3H2.25A2.252 2.252 0 010 15.75v-12A2.252 2.252 0 012.25 1.5H6A.75.75 0 016 3H2.25a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75H18a.75.75 0 010-1.5h3.75A2.252 2.252 0 0124 3.75v12A2.252 2.252 0 0121.75 18h-5.865l.5 3H18a.75.75 0 010 1.5H6zm8.865-1.5l-.5-3h-4.73l-.5 3h5.73z"}}),_c('circle',{attrs:{"cx":"12","cy":"9.75","r":"1.125"}}),_c('path',{attrs:{"d":"M7.875 13.5c-.62 0-1.125-.505-1.125-1.125v-5.25C6.75 6.505 7.255 6 7.875 6h.375v-.75A3.754 3.754 0 0112 1.5a3.754 3.754 0 013.75 3.75V6h.375c.62 0 1.125.505 1.125 1.125v5.25c0 .62-.505 1.125-1.125 1.125h-8.25zM15.75 12V7.5h-7.5V12h7.5zm-1.5-6v-.75A2.252 2.252 0 0012 3a2.252 2.252 0 00-2.25 2.25V6h4.5z"}})])
          )
        }
      }
    