
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
            children.concat([_c('path',{attrs:{"d":"M.751 19.5a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.751zM12.001 13.939c-.401 0-.778-.156-1.06-.439l-7.72-7.72c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.743.743 0 01.53-.22c.2 0 .389.078.53.22l7.72 7.72 7.719-7.72a.744.744 0 01.53-.22c.2 0 .389.078.53.22.142.141.22.33.22.53s-.078.389-.22.53l-7.72 7.72a1.486 1.486 0 01-1.059.439z"}})])
          )
        }
      }
    