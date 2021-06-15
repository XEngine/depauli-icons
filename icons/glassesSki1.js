
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
            children.concat([_c('path',{attrs:{"d":"M18 18.75a6.015 6.015 0 01-5.953-5.25h-.093A6.016 6.016 0 016 18.75c-3.308 0-6-2.692-6-6s2.692-6 6-6h.879A2.258 2.258 0 019 5.25h6c.96 0 1.808.615 2.121 1.5H18c3.308 0 6 2.692 6 6s-2.692 6-6 6zM12.75 12a.75.75 0 01.75.75c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5h-.879A2.258 2.258 0 0115 9.75H9c-.96 0-1.808-.615-2.121-1.5H6a4.505 4.505 0 00-4.5 4.5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5a.75.75 0 01.75-.75h1.5zM9 6.75a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9z"}})])
          )
        }
      }
    