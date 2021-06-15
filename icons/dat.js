
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
            children.concat([_c('path',{attrs:{"d":"M1.738 4.504a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM1.738 21.004a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM4.738 16.504a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75 3.754 3.754 0 013.75 3.75v1.5a3.754 3.754 0 01-3.75 3.75zm.75-1.629a2.264 2.264 0 001.5-2.121v-1.5c0-.962-.621-1.808-1.5-2.121v5.742zM13.738 16.504a.75.75 0 01-.75-.75v-2.25h-1.5v2.25a.75.75 0 01-1.5 0v-6c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v6a.75.75 0 01-.75.75zm-.75-4.5v-2.25a.75.75 0 00-1.5 0v2.25h1.5zM18.238 16.504a.75.75 0 01-.75-.75v-6.75h-.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-.75v6.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    