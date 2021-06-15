
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
            children.concat([_c('path',{attrs:{"d":"M2.236 21.75a1.53 1.53 0 01-.738-.201 1.49 1.49 0 01-.699-.911 1.49 1.49 0 01.15-1.138l9.759-17.242a1.473 1.473 0 011.289-.756 1.481 1.481 0 011.294.76l9.761 17.244c.124.215.193.465.198.719a1.49 1.49 0 01-.422 1.068 1.49 1.49 0 01-1.053.457H2.236zm.016-1.506l19.51.005-9.763-17.226-9.747 17.221z"}})])
          )
        }
      }
    