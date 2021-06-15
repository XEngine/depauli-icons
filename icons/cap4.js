
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
            children.concat([_c('path',{attrs:{"d":"M.75 20.25A.75.75 0 010 19.5v-3.75c0-4.963 4.037-9 9-9s9 4.037 9 9v3h5.25a.75.75 0 010 1.5H.75zm15.75-1.5v-3a7.489 7.489 0 00-3.358-6.252c.235.55.358 1.145.358 1.752v7.5h3zm-4.5 0v-7.5c0-1.654-1.346-3-3-3s-3 1.346-3 3v7.5h6zm-7.5 0v-7.5c0-.607.124-1.202.358-1.752A7.49 7.49 0 001.5 15.75v3h3zM6.749 6.266a.749.749 0 01-.563-1.246 3.724 3.724 0 012.817-1.269 3.74 3.74 0 012.808 1.27.75.75 0 01-1.124.992 2.244 2.244 0 00-1.829-.758c-.6.038-1.149.307-1.546.757a.75.75 0 01-.563.254z"}})])
          )
        }
      }
    