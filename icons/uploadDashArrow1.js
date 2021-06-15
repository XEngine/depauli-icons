
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
            children.concat([_c('path',{attrs:{"d":"M.751 19.5a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.751zM12.001 13.939c-.401 0-.778-.156-1.06-.439l-6.44-6.439a1.493 1.493 0 01-.439-1.057A1.503 1.503 0 015.561 4.5H18.44c.4 0 .775.156 1.058.437.586.585.588 1.537.004 2.123l-6.441 6.44a1.49 1.49 0 01-1.06.439zm0-1.499l6.439-6.439L5.563 6l6.438 6.44z"}})])
          )
        }
      }
    