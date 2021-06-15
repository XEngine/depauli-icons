
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
            children.concat([_c('path',{attrs:{"d":"M20.625 24c-.62 0-1.125-.505-1.125-1.125V15.75a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v7.125c0 .62-.505 1.125-1.125 1.125h-2.25c-.62 0-1.125-.505-1.125-1.125V11.351l-6.52 5.432A5.259 5.259 0 012.121 18a.622.622 0 00-.621.621v3.129c0 .414.336.75.75.75h.644c.863 0 1.706-.301 2.374-.848l3.657-2.993a.754.754 0 011.056.106.751.751 0 01-.105 1.055l-3.657 2.993A5.266 5.266 0 012.894 24H2.25A2.252 2.252 0 010 21.75v-3.129c0-1.17.951-2.121 2.121-2.121.875 0 1.727-.309 2.399-.869L12 9.399V3.75A3.768 3.768 0 0115.748 0h4.502A3.768 3.768 0 0124 3.748v19.127c0 .62-.505 1.125-1.125 1.125h-2.25zm1.875-1.5V3.75a2.264 2.264 0 00-2.251-2.25H15.75a2.264 2.264 0 00-2.25 2.252V22.5H15v-6.75a2.252 2.252 0 012.25-2.25h1.5A2.252 2.252 0 0121 15.75v6.75h1.5z"}}),_c('path',{attrs:{"d":"M16.125 9C15.505 9 15 8.495 15 7.875v-2.25c0-.62.505-1.125 1.125-1.125h3.75c.62 0 1.125.505 1.125 1.125v2.25C21 8.495 20.495 9 19.875 9h-3.75zM19.5 7.5V6h-3v1.5h3z"}})])
          )
        }
      }
    