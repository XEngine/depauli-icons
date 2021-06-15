
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
            children.concat([_c('path',{attrs:{"d":"M.75 17.939a.752.752 0 01-.53-1.281L10.94 5.94c.283-.284.659-.44 1.059-.44.401 0 .777.156 1.06.438l10.721 10.72a.752.752 0 01-.53 1.281.743.743 0 01-.53-.22L12 7 1.28 17.719a.743.743 0 01-.53.22z"}})])
          )
        }
      }
    