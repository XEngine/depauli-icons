
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h6a3.029 3.029 0 003.002-3.047l-.002-.089V7.6c.094-2.543 2.22-4.601 4.74-4.601l.101.001h6.848l-1.72-1.72c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.75.75 0 011.061 0l3 3a.74.74 0 01.163.245l.01.026a.73.73 0 010 .517l-.006.016a.764.764 0 01-.168.257L20.78 7.28a.744.744 0 01-1.06 0c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l1.72-1.72-6.931-.001c-1.732 0-3.194 1.403-3.259 3.129v11.709l.002.107A4.532 4.532 0 016.755 24H.75z"}})])
          )
        }
      }
    