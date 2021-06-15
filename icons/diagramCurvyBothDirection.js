
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
            children.concat([_c('path',{attrs:{"d":"M3.75 23.25a.743.743 0 01-.53-.22l-3-3a.75.75 0 01-.163-.245l-.009-.024a.733.733 0 010-.522l.012-.032a.74.74 0 01.16-.238l3-3a.744.744 0 011.06 0 .752.752 0 010 1.061l-1.72 1.72H13.5c1.654 0 3-1.346 3-3s-1.346-3-3-3h-3c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5h10.939l-1.72-1.72A.746.746 0 0119.72.97a.749.749 0 011.06 0l3 3a.74.74 0 01.163.245l.01.026a.73.73 0 010 .517l-.006.016a.764.764 0 01-.168.257L20.78 8.03a.744.744 0 01-1.06 0c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l1.72-1.72H10.5c-1.654 0-3 1.346-3 3s1.346 3 3 3h3c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5H2.561l1.72 1.72a.75.75 0 01-.531 1.28z"}})])
          )
        }
      }
    