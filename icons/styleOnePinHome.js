
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
            children.concat([_c('path',{attrs:{"d":"M12 24a.754.754 0 01-.7-.481l-1.656-4.307C5.348 18.14 2.25 14.194 2.25 9.752a9.69 9.69 0 012.855-6.895A9.683 9.683 0 0111.999.001c5.377 0 9.75 4.373 9.751 9.749 0 4.443-3.097 8.39-7.394 9.462L12.7 23.519A.754.754 0 0112 24zm-.001-22.499c-2.2 0-4.271.86-5.831 2.42A8.198 8.198 0 003.75 9.752c0 3.903 2.776 7.302 6.6 8.082a.748.748 0 01.55.466l1.1 2.86 1.1-2.86a.75.75 0 01.55-.466 8.278 8.278 0 006.6-8.084c0-4.549-3.701-8.249-8.251-8.249v-.375.375z"}}),_c('path',{attrs:{"d":"M9 13.5a.75.75 0 01-.75-.75V8.651l-.334.223a.749.749 0 11-.832-1.248l4.5-3a.75.75 0 01.832 0l4.5 3a.746.746 0 01.208 1.04.749.749 0 01-1.04.208l-.334-.223v4.099a.75.75 0 01-.75.75H9zm5.25-1.5V7.651L12 6.151l-2.25 1.5V12h4.5z"}})])
          )
        }
      }
    