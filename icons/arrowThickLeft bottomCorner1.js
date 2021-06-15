
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
            children.concat([_c('path',{attrs:{"d":"M4.5 21.751a2.252 2.252 0 01-2.25-2.25V6.751c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v4.757l8.448-8.448c.283-.283.66-.439 1.061-.439s.778.156 1.061.439l2.121 2.121c.284.284.44.661.439 1.061 0 .401-.156.777-.439 1.061l-8.448 8.447h4.757c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5H4.5zm-.75-2.25c0 .414.336.75.75.75h12.75v-3h-6.568a.747.747 0 01-.693-.463.745.745 0 01.163-.817l9.728-9.728-2.121-2.121-9.729 9.727a.743.743 0 01-.817.163.75.75 0 01-.463-.693V6.751h-3v12.75z"}})])
          )
        }
      }
    