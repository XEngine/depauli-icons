
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
            children.concat([_c('path',{attrs:{"d":"M15.278 24a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h1.5c.96 0 1.805-.621 2.118-1.5h-6.618a2.252 2.252 0 00-2.25 2.25v3a.75.75 0 01-1.5 0v-3a3.754 3.754 0 013.75-3.75h6.75v-2.25a.75.75 0 01.75-.75h1.9c-.208-.539-.408-1.073-.607-1.6l-.032-.084C18.788 5.827 17.161 1.5 11.153 1.5a8.651 8.651 0 00-6.331 2.76c-3.228 3.485-3.019 8.946.465 12.175.153.142.24.342.24.55v6.265a.75.75 0 01-1.5 0v-5.945C.181 13.5.032 7.225 3.722 3.241A10.147 10.147 0 0111.143 0c7.057 0 9.024 5.231 11.301 11.287.207.551.417 1.109.634 1.673.144.375.134.783-.03 1.149A1.497 1.497 0 0121.68 15h-1.152v2.25a3.754 3.754 0 01-3.75 3.75h-.75v2.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    