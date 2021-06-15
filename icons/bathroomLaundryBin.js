
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
            children.concat([_c('path',{attrs:{"d":"M6.751 24a3.754 3.754 0 01-3.75-3.75v-9.879a2.26 2.26 0 01-1.5-2.121A2.252 2.252 0 013.751 6h3.75V4.5c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5V6h3.75a2.252 2.252 0 012.25 2.25c0 .96-.615 1.808-1.5 2.121v9.879a3.754 3.754 0 01-3.75 3.75h-10.5zm-2.25-3.75a2.252 2.252 0 002.25 2.25h10.5a2.252 2.252 0 002.25-2.25v-.75h-2.25a.75.75 0 010-1.5h2.25v-1.5h-2.25a.75.75 0 010-1.5h2.25v-1.5h-2.25a.75.75 0 010-1.5h2.25v-1.5h-15V12h2.25a.75.75 0 010 1.5h-2.25V15h2.25a.75.75 0 010 1.5h-2.25V18h2.25a.75.75 0 010 1.5h-2.25v.75zM3.751 7.5a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-16.5zM15.001 6V4.5c0-1.654-1.346-3-3-3s-3 1.346-3 3V6h6z"}}),_c('path',{attrs:{"d":"M11.251 13.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM11.251 16.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM11.251 19.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    