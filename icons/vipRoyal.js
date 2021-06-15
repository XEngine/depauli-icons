
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
            children.concat([_c('path',{attrs:{"d":"M6.75 16.5a2.252 2.252 0 01-2.25-2.25V9.81c0-.401.156-.778.44-1.061A1.489 1.489 0 016 8.31c.34 0 .673.117.938.329l2.006 1.605L10.94 8.25a1.488 1.488 0 011.059-.439c.401 0 .777.156 1.06.438l1.997 1.996 2.007-1.606a1.503 1.503 0 012.109.233c.211.265.328.598.328.938v4.44a2.252 2.252 0 01-2.25 2.25H6.75zm-.751-6.69L6 14.25c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75V9.81l-2.531 2.026a.754.754 0 01-1-.056L12 9.31l-2.47 2.47a.749.749 0 01-.999.055L5.999 9.81z"}}),_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}})])
          )
        }
      }
    