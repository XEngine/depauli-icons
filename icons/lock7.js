
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75v-3a2.252 2.252 0 012.25-2.25h15c.96 0 1.808.615 2.121 1.5h2.379c1.241 0 2.25 1.009 2.25 2.25s-1.009 2.25-2.25 2.25h-2.379A2.258 2.258 0 0117.25 24h-15zm0-6a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h15a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-15zm19.5 3a.75.75 0 000-1.5H19.5V21h2.25zM15.75 15a.75.75 0 01-.75-.75v-7.5A5.256 5.256 0 009.75 1.5 5.256 5.256 0 004.5 6.75v7.5a.75.75 0 01-1.5 0v-7.5C3 3.028 6.028 0 9.75 0s6.75 3.028 6.75 6.75v7.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    