
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
            children.concat([_c('path',{attrs:{"d":"M5.25 10.499a.75.75 0 010-1.5h9a.75.75 0 010 1.5h-9z"}}),_c('path',{attrs:{"d":"M23.25 23.999a.743.743 0 01-.53-.22l-6.519-6.52a9.771 9.771 0 01-6.388 2.366c-5.411 0-9.813-4.402-9.814-9.812a9.751 9.751 0 012.873-6.939A9.749 9.749 0 019.811-.001c5.411 0 9.813 4.402 9.814 9.812 0 2.356-.837 4.61-2.364 6.387l6.52 6.521a.744.744 0 010 1.06.75.75 0 01-.531.22zM9.812 1.499a8.26 8.26 0 00-5.879 2.435 8.26 8.26 0 00-2.434 5.879 8.26 8.26 0 002.435 5.878 8.259 8.259 0 005.878 2.434c2.214 0 4.295-.86 5.864-2.42l.031-.031a8.256 8.256 0 002.418-5.863c0-4.583-3.73-8.312-8.313-8.312z"}})])
          )
        }
      }
    