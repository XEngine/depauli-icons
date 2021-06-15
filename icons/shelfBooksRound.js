
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24a.75.75 0 010-1.5h2.449C2.688 20.553.327 16.932.035 12.869a.774.774 0 01-.01-.119v-.011A11.908 11.908 0 010 12C0 5.383 5.383 0 12 0s12 5.383 12 12c0 .225-.008.46-.025.739v.011a.7.7 0 01-.01.122c-.294 4.062-2.654 7.682-6.164 9.628h2.449a.75.75 0 010 1.5H3.75zm6.75-1.61c.503.073 1.006.11 1.5.11V18h-1.5v4.39zm3 .003a10.42 10.42 0 001.5-.332V18h-1.5v4.393zM1.607 13.5A10.529 10.529 0 009 22.062V18c0-.827.673-1.5 1.5-1.5H15c.827 0 1.5.673 1.5 1.5v3.484a10.485 10.485 0 005.893-7.984H1.607zM22.5 12c0-5.79-4.71-10.5-10.5-10.5S1.5 6.21 1.5 12H6V7.25C6 6.561 6.561 6 7.25 6h5c.689 0 1.25.561 1.25 1.25V12h9zM12 12V7.5h-1.5V12H12zm-3 0V7.5H7.5V12H9z"}})])
          )
        }
      }
    