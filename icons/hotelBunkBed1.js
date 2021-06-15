
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
            children.concat([_c('path',{attrs:{"d":"M23.25 24a.75.75 0 01-.75-.75v-1.5h-3.75v1.5a.75.75 0 01-1.5 0v-1.5H1.5v1.5a.75.75 0 01-1.5 0V.75a.75.75 0 011.5 0v6h1.629a2.252 2.252 0 012.121-3h1.5a2.252 2.252 0 012.121 3h8.379V4.5a.75.75 0 011.5 0v2.25h3.75V4.5a.75.75 0 011.5 0v18.75a.75.75 0 01-.75.75zm-.75-3.75v-3h-3.75v3h3.75zm-5.25 0v-1.5H1.5v1.5h15.75zm0-3v-6H1.5v6h1.629a2.252 2.252 0 012.121-3h1.5a2.252 2.252 0 012.121 3h8.379zm-12-1.5a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zm17.25 0v-3h-3.75v3h3.75zm0-4.5v-3h-3.75v3h3.75zm-5.25-1.5v-1.5H1.5v1.5h15.75zm-12-4.5a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5z"}})])
          )
        }
      }
    