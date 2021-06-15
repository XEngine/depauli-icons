
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24C1.682 24 0 22.318 0 20.25s1.682-3.75 3.75-3.75H6V3.75A3.754 3.754 0 019.75 0h10.5A3.754 3.754 0 0124 3.75v3a.75.75 0 01-.75.75H18v12.75A3.754 3.754 0 0114.25 24H3.75zm10.5-7.5a.75.75 0 010 1.5C13.009 18 12 19.009 12 20.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25V3.75c0-.823.267-1.607.752-2.25H9.75A2.252 2.252 0 007.5 3.75V16.5h6.75zM3.75 18c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25h7.5c-.484-.643-.75-1.427-.75-2.25s.267-1.607.75-2.25h-7.5zM22.5 6V3.75c0-1.241-1.009-2.25-2.25-2.25S18 2.509 18 3.75V6h4.5z"}}),_c('path',{attrs:{"d":"M9.75 6a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM9.75 9a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM9.75 12a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z"}})])
          )
        }
      }
    