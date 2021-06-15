
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-1.654 0-3-1.346-3-3v-5.695A10.51 10.51 0 011.5 5.25C1.5 2.257 6.014 0 12 0s10.5 2.257 10.5 5.25A10.508 10.508 0 0115 15.305V21c0 1.654-1.346 3-3 3zM3.585 8.451c1.044 2.77 3.386 4.849 6.338 5.548.34.081.577.381.577.73V21c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5v-6.271c0-.349.237-.649.577-.73 2.953-.7 5.295-2.778 6.339-5.549C18.482 9.733 15.401 10.5 12 10.5c-3.401 0-6.483-.767-8.415-2.049zM12 1.5c-4.794 0-9 1.752-9 3.75S7.206 9 12 9s9-1.752 9-3.75-4.206-3.75-9-3.75z"}})])
          )
        }
      }
    