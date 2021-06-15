
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
            children.concat([_c('path',{attrs:{"d":"M20.247 23.25c-.263 0-.523-.07-.75-.202L2.256 13.29a1.471 1.471 0 01-.57-.572 1.47 1.47 0 01-.13-1.124c.108-.38.358-.695.703-.887L19.503.947c.216-.125.466-.194.722-.198.412.002.789.152 1.068.423.288.279.45.653.456 1.054v19.537a1.52 1.52 0 01-.202.74 1.505 1.505 0 01-1.3.747zm-.005-1.503l.006-19.498-17.23 9.752 17.224 9.746z"}})])
          )
        }
      }
    