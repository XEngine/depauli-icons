
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
            children.concat([_c('path',{attrs:{"d":"M10.5 23.998a2.252 2.252 0 01-2.25-2.25v-4.19c0-.4.156-.776.437-1.059l2.251-2.251a1.49 1.49 0 011.061-.439c.401 0 .777.156 1.06.439l2.25 2.25c.283.282.44.659.44 1.06v4.19a2.252 2.252 0 01-2.25 2.25H10.5zm-.751-6.44l.001 4.19c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-4.19L12 15.308l-2.251 2.25zM12 10.186c-.401 0-.777-.156-1.06-.438L8.69 7.497a1.487 1.487 0 01-.44-1.061V2.248a2.252 2.252 0 012.25-2.25h3a2.252 2.252 0 012.25 2.25v4.189c0 .395-.16.782-.441 1.061L13.06 9.747a1.489 1.489 0 01-1.06.439zm-1.5-8.688a.75.75 0 00-.75.75v4.189l2.249 2.25 2.25-2.25V2.248a.75.75 0 00-.75-.75H10.5zM17.561 15.75c-.401 0-.778-.156-1.061-.44l-2.25-2.25a1.502 1.502 0 01-.001-2.121l2.251-2.25a1.5 1.5 0 011.061-.439h4.189A2.252 2.252 0 0124 10.5v3a2.252 2.252 0 01-2.25 2.25h-4.189zm-.001-6l-2.25 2.249 2.25 2.25h4.19a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.188l-.002.001zM1.5 15.75c-.827 0-1.5-.673-1.5-1.5V9.748A1.503 1.503 0 011.5 8.25h4.939c.4 0 .776.156 1.06.438l2.251 2.251c.585.584.585 1.536.001 2.121L7.5 15.31c-.278.279-.665.44-1.059.44H1.5zm0-1.5h4.939L8.689 12l-2.25-2.25H1.501l-.001 4.5z"}})])
          )
        }
      }
    