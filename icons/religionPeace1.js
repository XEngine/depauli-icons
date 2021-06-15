
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-3.301 0-6.378-1.319-8.668-3.714a.473.473 0 01-.121-.128A11.95 11.95 0 010 12C0 5.383 5.383 0 12 0s12 5.383 12 12c0 2.94-1.078 5.769-3.038 7.969a.446.446 0 01-.096.108A12.019 12.019 0 0112 24zm.75-1.53a10.427 10.427 0 006.547-2.932l-6.547-6.271v9.203zm-7.879-2.769a10.449 10.449 0 006.379 2.769v-9.149l-6.379 6.38zM11.25 1.53A10.452 10.452 0 001.5 12c0 2.406.83 4.736 2.346 6.604L11.25 11.2V1.53zm9.05 16.892c1.422-1.835 2.2-4.1 2.2-6.422a10.452 10.452 0 00-9.75-10.47v9.661l7.55 7.231z"}})])
          )
        }
      }
    