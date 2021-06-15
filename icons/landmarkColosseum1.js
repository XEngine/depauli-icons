
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
            children.concat([_c('path',{attrs:{"d":"M2.25 23.25A2.252 2.252 0 010 21V3A2.252 2.252 0 012.25.75h4.576c.644 0 1.255.273 1.681.75l5.355 6.75h7.888A2.252 2.252 0 0124 10.5V21a2.252 2.252 0 01-2.25 2.25H2.25zm19.5-1.5a.75.75 0 00.75-.75v-3.75h-21V21c0 .414.336.75.75.75H4.5V19.5a.75.75 0 011.5 0v2.25h3V19.5a.75.75 0 011.5 0v2.25h3V19.5a.75.75 0 011.5 0v2.25h3V19.5a.75.75 0 011.5 0v2.25h2.25zm.75-6V10.5a.75.75 0 00-.75-.75H1.5v6h3V13.5a.75.75 0 011.5 0v2.25h3V13.5a.75.75 0 011.5 0v2.25h3V13.5a.75.75 0 011.5 0v2.25h3V13.5a.75.75 0 011.5 0v2.25h3zm-10.552-7.5L7.36 2.466a.732.732 0 00-.53-.216H2.25A.75.75 0 001.5 3v5.25h10.448z"}})])
          )
        }
      }
    