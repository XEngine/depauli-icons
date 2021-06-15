
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
            children.concat([_c('path',{attrs:{"d":"M4.09 21.41c-.827 0-1.5-.673-1.5-1.5V9.721c0-.601.234-1.166.659-1.591L6.03 5.35a1.49 1.49 0 011.058-.44c.402 0 .778.156 1.061.439.283.283.44.66.44 1.06v4.758l8.228-8.228c.284-.284.661-.44 1.061-.44.401 0 .778.156 1.061.44L21.06 5.06c.284.284.44.661.439 1.061 0 .4-.156.777-.439 1.06l-8.228 8.228h4.757a1.502 1.502 0 011.061 2.56l-2.781 2.781c-.425.425-.99.659-1.59.659H4.09zm.219-12.22a.748.748 0 00-.219.531V19.91h10.189a.748.748 0 00.531-.219l2.78-2.781h-6.568a.747.747 0 01-.693-.463.745.745 0 01.163-.817L20 6.122 17.878 4 8.37 13.508a.743.743 0 01-.817.163.75.75 0 01-.463-.693V6.411L4.309 9.19z"}})])
          )
        }
      }
    