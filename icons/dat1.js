
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
            children.concat([_c('path',{attrs:{"d":"M2.238 24.004a2.252 2.252 0 01-2.25-2.25v-19.5a2.252 2.252 0 012.25-2.25h19.5a2.252 2.252 0 012.25 2.25v19.5a2.252 2.252 0 01-2.25 2.25h-19.5zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-19.5a.75.75 0 00-.75-.75h-19.5z"}}),_c('path',{attrs:{"d":"M4.488 18.75a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75 3.754 3.754 0 013.75 3.75V15a3.754 3.754 0 01-3.75 3.75zm.75-1.629A2.264 2.264 0 006.738 15v-1.5c0-.962-.621-1.808-1.5-2.121v5.742zM13.488 18.75a.75.75 0 01-.75-.75v-2.246h-1.5V18a.75.75 0 01-1.5 0v-6c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v6a.75.75 0 01-.75.75zm-.75-4.496V12a.75.75 0 00-1.5 0v2.254h1.5zM17.988 18.754a.75.75 0 01-.75-.75v-6.75h-.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-.75v6.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    