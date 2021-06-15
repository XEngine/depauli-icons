
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
            children.concat([_c('path',{attrs:{"d":"M18.75 21.75a.743.743 0 01-.53-.22l-4.72-4.72-4.72 4.72a.744.744 0 01-1.06 0c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l4.72-4.72-4.5-4.5H.75A.75.75 0 010 10.5V6c.082-1.711 1.163-3.16 2.756-3.709a.748.748 0 01.489 0 4.073 4.073 0 012.754 3.673L6 9.75h1.5V7.5a.75.75 0 01.75-.75h13.5C22.991 6.75 24 7.759 24 9s-1.009 2.25-2.25 2.25h-2.689l-4.5 4.5 4.72 4.72a.744.744 0 010 1.06.75.75 0 01-.531.22zm-5.25-7.061l3.439-3.439H10.06l3.44 3.439zm8.25-4.939a.75.75 0 000-1.5H9v1.5h12.75zm-17.25 0V6A2.575 2.575 0 003 3.807a2.56 2.56 0 00-1.501 2.229L1.5 9.75h3z"}})])
          )
        }
      }
    