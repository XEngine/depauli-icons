
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
            children.concat([_c('path',{attrs:{"d":"M5.248 24a.75.75 0 010-1.5H18.75a3.01 3.01 0 002.942-2.403 2.998 2.998 0 00-1.691-3.324A2.271 2.271 0 0117.998 18H10.72a5.258 5.258 0 01-5.209-4.598l-.773-7.335A1.746 1.746 0 002.998 4.5C1.757 4.5.748 3.491.748 2.25S1.757 0 2.998 0C6.514 0 9.489 2.746 9.77 6.251L9.989 9h7.259a.75.75 0 010 1.5h-7.139l.137 1.72c.091.722.73 1.28 1.484 1.28h6.268a2.25 2.25 0 012.191 1.74 4.514 4.514 0 012.973 5.156A4.515 4.515 0 0118.751 24H5.248zM2.998 1.5a.75.75 0 000 1.5A3.243 3.243 0 016.23 5.909l.771 7.321a3.75 3.75 0 003.719 3.27h7.278a.75.75 0 000-1.5H11.73a3.003 3.003 0 01-2.976-2.627l-.479-6.002C8.056 3.64 5.738 1.5 2.998 1.5z"}})])
          )
        }
      }
    