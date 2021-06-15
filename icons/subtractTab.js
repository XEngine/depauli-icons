
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
            children.concat([_c('path',{attrs:{"d":"M2.247 18.75a2.252 2.252 0 01-2.25-2.25v-9a2.252 2.252 0 012.25-2.25h16.688c.781 0 1.494.395 1.908 1.057l2.812 4.5a2.263 2.263 0 010 2.385l-2.812 4.505a2.24 2.24 0 01-1.905 1.053H2.247zm0-12a.75.75 0 00-.75.75v9c0 .414.336.75.75.75h16.688a.75.75 0 00.638-.35l2.81-4.502a.754.754 0 000-.795l-2.812-4.5a.744.744 0 00-.636-.352H2.247z"}}),_c('path',{attrs:{"d":"M4.497 12.75a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z"}})])
          )
        }
      }
    