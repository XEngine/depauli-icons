
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
            children.concat([_c('path',{attrs:{"d":"M19.5 24a.75.75 0 010-1.5H21a.75.75 0 00.75-.75V10.5H2.25v11.25c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5H3a2.252 2.252 0 01-2.25-2.25V5.25A2.252 2.252 0 013 3h3.75V.75a.75.75 0 011.5 0V3h7.5V.75a.75.75 0 011.5 0V3H21a2.252 2.252 0 012.25 2.25v16.5A2.252 2.252 0 0121 24h-1.5zm2.25-15V5.25A.75.75 0 0021 4.5h-3.75V6a.75.75 0 01-1.5 0V4.5h-7.5V6a.75.75 0 01-1.5 0V4.5H3a.75.75 0 00-.75.75V9h19.5z"}}),_c('circle',{attrs:{"cx":"12","cy":"20.25","r":"1.125"}}),_c('path',{attrs:{"d":"M7.875 24c-.62 0-1.125-.505-1.125-1.125v-5.25c0-.62.505-1.125 1.125-1.125h.375v-.75A3.754 3.754 0 0112 12a3.754 3.754 0 013.75 3.75v.75h.375c.62 0 1.125.505 1.125 1.125v5.25c0 .62-.505 1.125-1.125 1.125h-8.25zm7.875-1.5V18h-7.5v4.5h7.5zm-1.5-6v-.75A2.252 2.252 0 0012 13.5a2.252 2.252 0 00-2.25 2.25v.75h4.5z"}})])
          )
        }
      }
    