
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
            children.concat([_c('path',{attrs:{"d":"M15.468 18a2.655 2.655 0 01-2.307-1.358.75.75 0 01-.065-.154L12 12.765l-1.095 3.722a.786.786 0 01-.064.153A2.655 2.655 0 018.537 18H6.75A6.758 6.758 0 010 11.25v-1.5A3.754 3.754 0 013.75 6h16.5A3.754 3.754 0 0124 9.75v1.5A6.758 6.758 0 0117.25 18h-1.782zm-.959-2.027c.21.324.574.525.962.527h1.779a5.264 5.264 0 004.742-3H13.78l.729 2.473zM2.008 13.5a5.264 5.264 0 004.742 3h1.784a1.15 1.15 0 00.958-.527l.728-2.473H2.008zM22.446 12c.036-.248.054-.499.054-.75v-.75h-21v.75c0 .251.018.502.054.75h9.15a1.498 1.498 0 011.91-.614c.29.13.527.344.683.614h9.149zm-.078-3a2.262 2.262 0 00-2.118-1.5H3.75c-.96 0-1.805.621-2.118 1.5h20.736z"}})])
          )
        }
      }
    