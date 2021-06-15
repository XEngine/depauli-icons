
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24a3.754 3.754 0 01-3.75-3.75V3.75A3.754 3.754 0 018.25 0h7.5a3.754 3.754 0 013.75 3.75v16.5A3.754 3.754 0 0115.75 24h-7.5zM6 20.25a2.252 2.252 0 002.25 2.25h7.5A2.252 2.252 0 0018 20.25v-.375H6v.375zm12-1.875V3.75a2.252 2.252 0 00-2.25-2.25h-7.5A2.252 2.252 0 006 3.75v14.625h12z"}}),_c('path',{attrs:{"d":"M8.25 7.125a.75.75 0 01-.75-.75v-1.5a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H9v.75a.75.75 0 01-.75.75zM12.75 8.625a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3zm2.25-1.5v-1.5h-1.5v1.5H15zM8.25 16.125a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3zm2.25-1.5v-1.5H9v1.5h1.5zM8.25 10.125a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM13.5 11.625a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5H13.5zM13.5 16.125a.75.75 0 010-1.5H15v-.75a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75H13.5z"}})])
          )
        }
      }
    