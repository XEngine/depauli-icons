
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
            children.concat([_c('path',{attrs:{"d":"M12 24a11.922 11.922 0 01-8.43-3.468.343.343 0 01-.099-.099A11.924 11.924 0 010 12a11.92 11.92 0 013.469-8.43.418.418 0 01.098-.098A11.916 11.916 0 0112 0a11.92 11.92 0 018.43 3.468.397.397 0 01.099.099A11.92 11.92 0 0124 12a11.92 11.92 0 01-3.468 8.43.364.364 0 01-.099.098A11.916 11.916 0 0112 24zm-6.87-4.069A10.448 10.448 0 0012 22.5c2.534 0 4.958-.909 6.87-2.569L12 13.061l-6.87 6.87zm14.801-1.061A10.448 10.448 0 0022.5 12c0-2.534-.909-4.958-2.569-6.87L13.061 12l6.87 6.87zM4.069 5.13C2.41 7.042 1.5 9.466 1.5 12s.91 4.958 2.569 6.87l6.87-6.87-6.87-6.87zM12 10.939l6.87-6.87C16.958 2.41 14.534 1.5 12 1.5s-4.958.91-6.87 2.569l6.87 6.87z"}})])
          )
        }
      }
    