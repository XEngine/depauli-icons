
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
            children.concat([_c('path',{attrs:{"d":"M9 23.625a.75.75 0 01-.75-.75v-1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.549A2.746 2.746 0 010 18.625v-9.5a2.754 2.754 0 012.75-2.75H3v-1.5c0-.827.673-1.5 1.5-1.5h.75v-2.25a.75.75 0 011.5 0v2.25h.75c.827 0 1.5.673 1.5 1.5v1.5h.25A2.754 2.754 0 0112 9.125v9.5a2.746 2.746 0 01-2.25 2.701v1.549a.75.75 0 01-.75.75zm-7.5-5c0 .689.561 1.25 1.25 1.25h6.5c.689 0 1.25-.561 1.25-1.25v-1h-9v1zm9-2.5v-4.5h-9v4.5h9zm0-6v-1c0-.689-.561-1.25-1.25-1.25h-6.5c-.689 0-1.25.561-1.25 1.25v1h9zm-3-3.75v-1.5h-3v1.5h3zM21.75 17.625a.75.75 0 01-.75-.75v-1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.629a2.26 2.26 0 01-1.5-2.121v-8.25a2.252 2.252 0 012.25-2.25H18v-1.5a.75.75 0 011.5 0v1.5h2.25A2.252 2.252 0 0124 4.875v8.25c0 .96-.615 1.808-1.5 2.121v1.629a.75.75 0 01-.75.75zm-6.75-4.5c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-1.5H15v1.5zm7.5-3v-2.25H15v2.25h7.5zm0-3.75v-1.5a.75.75 0 00-.75-.75h-6a.75.75 0 00-.75.75v1.5h7.5z"}})])
          )
        }
      }
    