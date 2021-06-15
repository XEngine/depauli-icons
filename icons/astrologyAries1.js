
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
            children.concat([_c('path',{attrs:{"d":"M12.02 22.5a1.377 1.377 0 01-1.331-1.036C8.816 13.947 6.976 8.229.313 3.072a.752.752 0 01.459-1.344c.165 0 .328.056.459.157 6.898 5.34 8.884 11.155 10.79 18.727 1.904-7.569 3.888-13.385 10.792-18.728a.756.756 0 01.459-.157.75.75 0 01.459 1.343c-6.666 5.159-8.505 10.876-10.375 18.388A1.38 1.38 0 0112.02 22.5z"}})])
          )
        }
      }
    