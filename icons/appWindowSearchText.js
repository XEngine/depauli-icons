
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
            children.concat([_c('path',{attrs:{"d":"M23.259 24.003a.743.743 0 01-.53-.22l-3.294-3.293a5.989 5.989 0 01-3.676 1.263c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6a5.99 5.99 0 01-1.263 3.677l3.294 3.293a.75.75 0 01-.531 1.28zm-7.5-12.75c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5z"}}),_c('path',{attrs:{"d":"M2.259 21.003a2.252 2.252 0 01-2.25-2.25v-16.5a2.252 2.252 0 012.25-2.25h18a2.252 2.252 0 012.25 2.25v6a.75.75 0 01-1.5 0v-2.25h-19.5v12.75c0 .414.336.75.75.75h7.5a.75.75 0 010 1.5h-7.5zm18.75-16.5v-2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.25h19.5z"}}),_c('path',{attrs:{"d":"M3.759 10.503a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM3.759 13.503a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM3.759 16.503a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    