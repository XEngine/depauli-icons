
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
            children.concat([_c('path',{attrs:{"d":"M12 20.13c-.398 0-.776-.153-1.065-.43L.422 9.476A1.477 1.477 0 01.001 8.41c.008-.397.17-.767.455-1.041L3.22 4.682a1.533 1.533 0 012.132-.003L12 11.143l6.656-6.471a1.532 1.532 0 012.122.007l2.795 2.718a1.49 1.49 0 01-.029 2.114L13.068 19.697c-.29.279-.669.433-1.068.433zm-.022-1.509a.031.031 0 00.022.008c.01 0 .018-.003.025-.01l10.469-10.18-2.759-2.682a.128.128 0 00-.028-.005c-.01 0-.015.003-.019.007l-7.165 6.966a.747.747 0 01-1.046 0L4.31 5.758l-.022-.008a.034.034 0 00-.025.011L1.507 8.439l10.471 10.182z"}})])
          )
        }
      }
    