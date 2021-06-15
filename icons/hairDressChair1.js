
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
            children.concat([_c('path',{attrs:{"d":"M19.5 24a.75.75 0 010-1.5h2.25a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75H4.5a.75.75 0 010 1.5H2.25A2.252 2.252 0 010 21.75V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v19.5A2.252 2.252 0 0121.75 24H19.5z"}}),_c('path',{attrs:{"d":"M9.75 24a.75.75 0 010-1.5h1.5V21h-4C6.561 21 6 20.439 6 19.75v-1.879a2.258 2.258 0 01-1.5-2.121v-1.5a.75.75 0 011.5 0v1.5c0 .414.336.75.75.75h1.5v-6.25A2.754 2.754 0 0111 7.5h2a2.754 2.754 0 012.75 2.75v6.25h1.5a.75.75 0 00.75-.75v-1.5a.75.75 0 011.5 0v1.5c0 .96-.615 1.808-1.5 2.121v1.879c0 .689-.561 1.25-1.25 1.25h-4v1.5h1.5a.75.75 0 010 1.5h-4.5zm6.75-4.5V18h-9v1.5h9zm-2.25-3v-6.25C14.25 9.561 13.689 9 13 9h-2c-.689 0-1.25.561-1.25 1.25v6.25h4.5z"}})])
          )
        }
      }
    