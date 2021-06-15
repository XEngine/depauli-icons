
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
            children.concat([_c('path',{attrs:{"d":"M11.861 24.003a2.976 2.976 0 01-2.121-.879l-6.9-6.893a3.005 3.005 0 01-.002-4.245 2.985 2.985 0 012.113-.88h.01c.801 0 1.554.312 2.121.878l1.774 1.773V3c0-1.654 1.346-3 3-3s3 1.346 3 3v10.76l1.773-1.773a2.978 2.978 0 012.121-.877c.802 0 1.555.312 2.121.877a3.003 3.003 0 010 4.243l-6.888 6.894a2.982 2.982 0 01-2.122.879zM4.96 12.607A1.503 1.503 0 003.9 15.17l6.9 6.893c.284.284.66.44 1.061.44.401 0 .777-.156 1.061-.439l6.888-6.894a1.502 1.502 0 00-1.061-2.561c-.4 0-.777.156-1.061.439l-3.053 3.053a.745.745 0 01-.818.163.746.746 0 01-.462-.693V3c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v12.568a.75.75 0 01-1.281.53L6.02 13.045a1.488 1.488 0 00-1.06-.438v-.375.375z"}})])
          )
        }
      }
    