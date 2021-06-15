
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
            children.concat([_c('path',{attrs:{"d":"M23.25 23.9a.75.75 0 01-.75-.75V7.55a.747.747 0 00-.397-.661l-9.75-5.2a.743.743 0 00-.706 0l-9.75 5.2a.746.746 0 00-.397.661v15.6a.75.75 0 01-1.5 0V7.55c0-.833.457-1.593 1.191-1.985l9.75-5.2a2.253 2.253 0 012.118 0l9.75 5.2A2.246 2.246 0 0124 7.549v15.6a.751.751 0 01-.75.751z"}}),_c('path',{attrs:{"d":"M8.25 23.9a.75.75 0 010-1.5h3v-3.048A6.015 6.015 0 016 13.4a.75.75 0 011.5 0c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5a.75.75 0 011.5 0c0 3.03-2.279 5.58-5.25 5.952V22.4h3a.75.75 0 010 1.5h-7.5z"}}),_c('path',{attrs:{"d":"M12 16.4a3.754 3.754 0 01-3.75-3.75v-3A3.754 3.754 0 0112 5.9a3.754 3.754 0 013.75 3.75v3A3.754 3.754 0 0112 16.4zm-2.25-3.75A2.252 2.252 0 0012 14.9a2.252 2.252 0 002.25-2.25V10.4h-4.5v2.25zm4.368-3.75C13.805 8.02 12.96 7.4 12 7.4s-1.805.62-2.118 1.5h4.236z"}})])
          )
        }
      }
    