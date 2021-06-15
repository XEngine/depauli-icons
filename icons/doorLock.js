
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
            children.concat([_c('path',{attrs:{"d":"M2.25 19.5A2.252 2.252 0 010 17.25v-6c0-.96.615-1.808 1.5-2.121V7.5C1.5 5.019 3.519 3 6 3s4.5 2.019 4.5 4.5v1.629A2.258 2.258 0 0112 11.25v6a2.252 2.252 0 01-2.25 2.25h-7.5zm0-9a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75h-7.5zM9 9V7.5c0-1.654-1.346-3-3-3s-3 1.346-3 3V9h6z"}}),_c('path',{attrs:{"d":"M6 15.375c-.62 0-1.125-.505-1.125-1.125a1.127 1.127 0 011.923-.794A1.126 1.126 0 016 15.375zM11.25 24A2.252 2.252 0 019 21.75a.75.75 0 011.5 0c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75h-10.5c-.414 0-.75.336-.75.75a.75.75 0 01-1.5 0A2.252 2.252 0 0111.25 0h10.5A2.252 2.252 0 0124 2.25v19.5A2.252 2.252 0 0121.75 24h-10.5z"}})])
          )
        }
      }
    