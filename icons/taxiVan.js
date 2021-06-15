
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
            children.concat([_c('path',{attrs:{"d":"M18.75 20c-.96 0-1.808-.615-2.121-1.5H8.871C8.558 19.385 7.71 20 6.75 20s-1.808-.615-2.121-1.5H2.25A2.252 2.252 0 010 16.25c0-.042.003-.083.01-.124l.332-1.992A3.738 3.738 0 014.041 11h1.573l2.629-3.68a3.758 3.758 0 013.051-1.57H23.25a.75.75 0 01.75.75v5.25a.75.75 0 01-.75.75H13.5V17h3.129c.314-.885 1.162-1.5 2.121-1.5s1.808.615 2.121 1.5h2.379a.75.75 0 010 1.5h-2.379A2.258 2.258 0 0118.75 20zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zm-12 0a.75.75 0 100 1.5.75.75 0 000-1.5zM12 17v-4.5H4.041a2.243 2.243 0 00-2.219 1.88l-.32 1.921A.755.755 0 002.25 17h2.379c.314-.885 1.162-1.5 2.121-1.5s1.808.615 2.121 1.5H12zm10.5-6V7.25h-3.75V11h3.75zm-5.25 0V7.25H13.5V11h3.75zM12 11V7.25h-.706c-.725 0-1.409.352-1.831.942L7.458 11H12z"}})])
          )
        }
      }
    