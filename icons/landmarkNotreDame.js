
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
            children.concat([_c('path',{attrs:{"d":"M1.25 24C.561 24 0 23.439 0 22.75V1.5C0 .673.673 0 1.5 0h6C8.327 0 9 .673 9 1.5V9h6V1.5c0-.827.673-1.5 1.5-1.5h6c.827 0 1.5.673 1.5 1.5v21.25c0 .689-.561 1.25-1.25 1.25H1.25zm21.25-1.5v-6h-21v6h2.25v-2.25C3.75 19.009 4.759 18 6 18s2.25 1.009 2.25 2.25v2.25h1.5v-2.25A2.252 2.252 0 0112 18a2.252 2.252 0 012.25 2.25v2.25h1.5v-2.25c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v2.25h2.25zm-3.75 0v-2.25a.75.75 0 00-1.5 0v2.25h1.5zm-6 0v-2.25a.75.75 0 00-1.5 0v2.25h1.5zm-6 0v-2.25a.75.75 0 00-1.5 0v2.25h1.5zM22.5 15v-4.5h-6l6 4.5zM15 15v-4.5H9l6 4.5zm-7.5 0v-4.5h-6V15h6zm15-6V4.5h-6V9h6zm-15 0V4.5h-6V9h6zm15-6V1.5h-6V3h6zm-15 0V1.5h-6V3h6z"}}),_c('circle',{attrs:{"cx":"12","cy":"12.75","r":"1.125"}})])
          )
        }
      }
    