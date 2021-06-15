
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
            children.concat([_c('path',{attrs:{"d":"M15.027 24a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h1.5a2.252 2.252 0 002.25-2.25v-3a.75.75 0 01.75-.75h1.9a183.72 183.72 0 01-.62-1.635l-.018-.047C18.62 6.053 16.907 1.5 10.902 1.5a8.647 8.647 0 00-6.33 2.76c-3.228 3.485-3.02 8.946.465 12.175.153.142.24.342.24.55v6.265a.75.75 0 01-1.5 0v-5.945C-.07 13.5-.219 7.225 3.472 3.241A10.143 10.143 0 0110.892 0c7.053 0 9.022 5.232 11.301 11.29.327.869.665 1.768 1.031 2.681A.75.75 0 0122.527 15h-2.25v2.25a3.754 3.754 0 01-3.75 3.75h-.75v2.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    