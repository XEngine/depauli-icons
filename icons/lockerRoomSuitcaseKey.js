
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24A3.754 3.754 0 010 20.25v-12A3.754 3.754 0 013.75 4.5H7.5C7.5 2.019 9.519 0 12 0s4.5 2.019 4.5 4.5h3.75A3.754 3.754 0 0124 8.25v12A3.754 3.754 0 0120.25 24H3.75zm16.5-1.5a2.252 2.252 0 002.25-2.25v-12A2.252 2.252 0 0020.25 6H18v3.75a.75.75 0 01-1.5 0V6h-9v2.25a.75.75 0 01-1.5 0V6H3.75A2.252 2.252 0 001.5 8.25v12a2.252 2.252 0 002.25 2.25H6v-2.25a.75.75 0 011.5 0v2.25h9v-2.25a.75.75 0 011.5 0v2.25h2.25zM15 4.5c0-1.654-1.346-3-3-3s-3 1.346-3 3h6z"}}),_c('path',{attrs:{"d":"M8.25 18a3.754 3.754 0 01-3.75-3.75 3.754 3.754 0 013.75-3.75 3.743 3.743 0 013.673 3h6.827a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V15h-1.5v.75a.75.75 0 01-1.5 0V15h-3.077a3.743 3.743 0 01-3.673 3zm0-6C7.009 12 6 13.009 6 14.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25S9.491 12 8.25 12z"}})])
          )
        }
      }
    