
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
            children.concat([_c('path',{attrs:{"d":"M11.25 23.75a.755.755 0 01-.26-.047l-.022-.008a.732.732 0 01-.249-.165l-2.999-3c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.744.744 0 011.06 0l1.72 1.72v-7.94H.75a.75.75 0 010-1.5h9.75V7.625A7.133 7.133 0 0117.625.5C21.14.5 24 3.36 24 6.875s-2.86 6.375-6.375 6.375H12v7.939l1.72-1.72a.744.744 0 011.06 0 .75.75 0 010 1.061l-3 3a.763.763 0 01-.246.164l-.027.01a.746.746 0 01-.257.046zm6.375-12c2.688 0 4.875-2.187 4.875-4.875S20.313 2 17.625 2A5.63 5.63 0 0012 7.625v4.125h5.625z"}})])
          )
        }
      }
    