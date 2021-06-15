
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
            children.concat([_c('path',{attrs:{"d":"M4.5 16.498a.743.743 0 01-.53-.22l-3.75-3.75a.74.74 0 01-.163-.245l-.01-.026a.75.75 0 01.009-.541.74.74 0 01.166-.249L3.97 7.718a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-2.47 2.47h8.689a.75.75 0 010 1.5H2.561l2.47 2.47a.75.75 0 01-.531 1.28zM17.25 23.998a2.252 2.252 0 01-2.25-2.25v-19.5a2.252 2.252 0 012.25-2.25h4.5A2.252 2.252 0 0124 2.248v19.5a2.252 2.252 0 01-2.25 2.25h-4.5zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-19.5a.75.75 0 00-.75-.75h-4.5z"}})])
          )
        }
      }
    