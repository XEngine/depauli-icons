
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
            children.concat([_c('path',{attrs:{"d":"M18 18.5c-2.955 0-5.016-2.716-6-4.378-.984 1.662-3.045 4.378-6 4.378-3.308 0-6-2.692-6-6s2.692-6 6-6c2.957 0 5.016 2.715 6 4.378.984-1.663 3.043-4.378 5.998-4.378a6.007 6.007 0 016.002 6c0 3.308-2.692 6-6 6zm-5.171-6c.518 1.044 2.44 4.5 5.171 4.5 2.481 0 4.5-2.019 4.5-4.5S20.481 8 18 8h-.002c-2.73 0-4.651 3.456-5.169 4.5zM6 8a4.505 4.505 0 00-4.5 4.5C1.5 14.981 3.519 17 6 17c2.731 0 4.653-3.456 5.171-4.5C10.653 11.456 8.732 8 6.002 8H6z"}})])
          )
        }
      }
    