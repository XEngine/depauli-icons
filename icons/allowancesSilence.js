
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
            children.concat([_c('path',{attrs:{"d":"M18.75 24a.75.75 0 01-.75-.75V21h-.75a3.754 3.754 0 01-3.75-3.75V15h-2.25a.75.75 0 01-.696-1.028c.274-.685.537-1.365.796-2.034C13.831 5.531 15.973 0 23.25 0a.75.75 0 010 1.5c-6.249 0-8.125 4.844-10.5 10.977l-.397 1.023h1.898a.75.75 0 01.75.75v3a2.252 2.252 0 002.25 2.25h1.5a.75.75 0 01.75.75v3a.752.752 0 01-.751.75zM8.25 24a.75.75 0 01-.75-.75V13.5a.75.75 0 00-1.5 0v6.75a.75.75 0 01-1.5 0v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 01-1.5 0v-1.5c0-.414-.336-.75-.75-.75a.75.75 0 010-1.5c.555 0 1.09.209 1.5.575.41-.365.945-.575 1.5-.575.259 0 .512.043.75.128V13.5c0-1.241 1.009-2.25 2.25-2.25S9 12.259 9 13.5v9.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    