
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
            children.concat([_c('path',{attrs:{"d":"M23.133 19.795a.748.748 0 01-.739-.625c-.369-2.17-1.19-4.221-2.383-5.961-2.569 2.849-6.067 4.473-9.669 4.473a13.013 13.013 0 01-9.883-4.713 1.486 1.486 0 01.009-1.946 13 13 0 019.867-4.704c3.607 0 7.107 1.624 9.677 4.472C21.205 9.051 22.025 7 22.394 4.83a.748.748 0 01.862-.614.75.75 0 01.616.865c-.432 2.537-1.425 4.923-2.88 6.919 1.455 1.995 2.449 4.382 2.88 6.92a.744.744 0 01-.128.56.745.745 0 01-.611.315zM10.346 7.818a11.509 11.509 0 00-8.732 4.172 11.46 11.46 0 008.738 4.192c3.26 0 6.425-1.521 8.728-4.182-2.303-2.661-5.469-4.181-8.734-4.182z"}})])
          )
        }
      }
    