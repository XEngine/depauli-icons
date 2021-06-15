
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12a11.92 11.92 0 013.469-8.43.418.418 0 01.098-.098A11.916 11.916 0 0112 0c6.617 0 12 5.383 12 12a11.92 11.92 0 01-3.468 8.43.364.364 0 01-.099.098A11.916 11.916 0 0112 24zM4.069 5.13A10.453 10.453 0 001.5 12c0 5.79 4.71 10.5 10.5 10.5 2.534 0 4.958-.909 6.87-2.569L4.069 5.13zm15.862 13.74A10.448 10.448 0 0022.5 12c0-5.79-4.71-10.5-10.5-10.5-2.534 0-4.958.91-6.87 2.569L19.931 18.87z"}})])
          )
        }
      }
    