
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
            children.concat([_c('path',{attrs:{"d":"M2.238 24.004a2.252 2.252 0 01-2.25-2.25v-19.5a2.252 2.252 0 012.25-2.25h19.5a2.252 2.252 0 012.25 2.25v19.5a2.252 2.252 0 01-2.25 2.25h-19.5zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-19.5a.75.75 0 00-.75-.75h-19.5z"}}),_c('path',{attrs:{"d":"M8.238 18.754a.75.75 0 01-.75-.75v-3.133a2.258 2.258 0 01-1.5-2.121V10.5a.75.75 0 011.5 0v2.25a.75.75 0 001.5 0V10.5a.75.75 0 011.5 0v2.25c0 .96-.615 1.808-1.5 2.121v3.133a.75.75 0 01-.75.75zM17.238 18.754a.75.75 0 01-.75-.75v-4.792l-.857 1.428a.752.752 0 01-1.286-.001l-.857-1.428v4.792a.75.75 0 01-1.5 0v-7.5a.752.752 0 01.75-.75c.262 0 .509.139.644.364l1.607 2.678 1.607-2.678a.754.754 0 01.843-.337c.325.09.551.387.551.723v7.5a.754.754 0 01-.752.751z"}})])
          )
        }
      }
    