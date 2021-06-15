
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
            children.concat([_c('path',{attrs:{"d":"M12 24a11.921 11.921 0 01-6.862-2.164 12.068 12.068 0 01-3.014-3.03A11.916 11.916 0 010 12C0 5.383 5.383 0 12 0a11.92 11.92 0 016.854 2.158 12.028 12.028 0 012.982 2.98.472.472 0 01.062.089A11.9 11.9 0 0124 12c0 6.617-5.383 12-12 12zm-5.15-2.855A10.452 10.452 0 0012 22.5c5.79 0 10.5-4.71 10.5-10.5 0-1.809-.467-3.58-1.355-5.15L6.85 21.145zm-3.147-2.721c.544.701 1.173 1.33 1.874 1.874L20.298 5.577a10.553 10.553 0 00-1.874-1.874L3.703 18.424zM12 1.5C6.21 1.5 1.5 6.21 1.5 12c0 1.81.467 3.58 1.355 5.15L17.15 2.855A10.45 10.45 0 0012 1.5z"}})])
          )
        }
      }
    