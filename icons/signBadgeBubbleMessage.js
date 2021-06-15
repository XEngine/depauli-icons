
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
            children.concat([_c('path',{attrs:{"d":"M12.752 23.999c-.491 0-.951-.239-1.23-.64l-3.384-5.36H4.5a2.252 2.252 0 01-2.25-2.25v-13.5A2.252 2.252 0 014.5-.001H21a2.252 2.252 0 012.25 2.25v13.5a2.252 2.252 0 01-2.25 2.25h-3.636l-3.365 5.33a1.487 1.487 0 01-1.247.67zM4.5 1.499a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h4.05c.259 0 .496.131.634.35l3.564 5.645 3.567-5.645a.746.746 0 01.634-.35H21a.75.75 0 00.75-.75v-13.5a.75.75 0 00-.75-.75H4.5z"}})])
          )
        }
      }
    