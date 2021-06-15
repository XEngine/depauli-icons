
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
            children.concat([_c('path',{attrs:{"d":"M6.75 23.25a.75.75 0 010-1.5h2.365l.5-3H2.25A2.252 2.252 0 010 16.5V3A2.252 2.252 0 012.25.75h19.5A2.252 2.252 0 0124 3v13.5a2.252 2.252 0 01-2.25 2.25h-7.365l.5 3h2.365a.75.75 0 010 1.5H6.75zm6.615-1.5l-.5-3h-1.729l-.5 3h2.729zM2.25 2.25A.75.75 0 001.5 3v13.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V3a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M10.5 14.25a.75.75 0 01-.75-.75v-2.25h-3v2.25a.75.75 0 01-1.5 0V6a.75.75 0 011.5 0v3.75h3V6a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75zM13.5 14.25a.75.75 0 01-.75-.75V6a.75.75 0 01.75-.75H15A3.754 3.754 0 0118.75 9v1.5A3.754 3.754 0 0115 14.25h-1.5zm1.5-1.5a2.252 2.252 0 002.25-2.25V9A2.252 2.252 0 0015 6.75h-.75v6H15z"}})])
          )
        }
      }
    