
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
            children.concat([_c('path',{attrs:{"d":"M.755 23.25a.75.75 0 010-1.5V8.044a1.5 1.5 0 01-.75-1.294V5a.75.75 0 01.202-.512C2.361 2.183 6.877.751 11.995.751c5.133.001 9.656 1.433 11.809 3.737.13.14.202.322.202.512v1.75c0 .538-.292 1.029-.75 1.294V21.75a.75.75 0 010 1.5H.755zm21-1.5V8.25h-19.5v13.5h1.5v-9a2.252 2.252 0 012.25-2.25h12a2.252 2.252 0 012.25 2.25v9h1.5zm-3 0V19.5h-13.5v2.25h13.5zm0-3.75v-2.25h-13.5V18h13.5zm0-3.75v-1.5a.75.75 0 00-.75-.75h-12a.75.75 0 00-.75.75v1.5h13.5zm-17.25-7.5h21V5.307c-1.959-1.888-5.962-3.056-10.507-3.056l-.003-.375v.375c-4.534 0-8.53 1.168-10.49 3.056V6.75z"}}),_c('path',{attrs:{"d":"M10.293 5.25a.75.75 0 010-1.5h3.424a.75.75 0 010 1.5h-3.424z"}})])
          )
        }
      }
    