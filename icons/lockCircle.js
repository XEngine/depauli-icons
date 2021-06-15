
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
            children.concat([_c('path',{attrs:{"d":"M8.25 19.5A2.252 2.252 0 016 17.25v-6c0-.96.615-1.808 1.5-2.121V7.5C7.5 5.019 9.519 3 12 3s4.5 2.019 4.5 4.5v1.629A2.258 2.258 0 0118 11.25v6a2.252 2.252 0 01-2.25 2.25h-7.5zm0-9a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75h-7.5zM15 9V7.5c0-1.654-1.346-3-3-3s-3 1.346-3 3V9h6z"}}),_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M12 16.5a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    