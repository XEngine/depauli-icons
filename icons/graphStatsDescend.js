
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
            children.concat([_c('path',{attrs:{"d":"M16.5 18.75a.75.75 0 010-1.5h4.939l-6.659-6.659a.748.748 0 00-1.061 0l-3.129 3.128c-.425.425-.99.659-1.592.659a2.234 2.234 0 01-1.59-.658L.22 6.53C.078 6.389 0 6.2 0 6s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l7.189 7.189c.142.141.33.219.531.219a.748.748 0 00.531-.219l3.128-3.128c.425-.425.99-.658 1.592-.658s1.167.234 1.591.658l6.659 6.659v-4.94a.75.75 0 011.499 0V18a.744.744 0 01-.047.258l-.006.016a.76.76 0 01-.412.419l-.026.01a.733.733 0 01-.259.047H16.5z"}})])
          )
        }
      }
    