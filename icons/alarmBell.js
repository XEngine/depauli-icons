
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
            children.concat([_c('path',{attrs:{"d":"M11.99 24.001a2.835 2.835 0 01-2.718-2.039.75.75 0 011.439-.423 1.335 1.335 0 002.565.001.755.755 0 01.93-.509.75.75 0 01.509.931 2.844 2.844 0 01-2.725 2.039zM2.991 19.501a.754.754 0 01-.674-.421.747.747 0 01.083-.791c.006-.009 1.341-1.939 1.341-7.788a8.237 8.237 0 017.5-8.216V.751a.75.75 0 011.5 0v1.534a8.237 8.237 0 017.5 8.216c0 6.303 1.246 7.686 1.258 7.699a.756.756 0 01.187.818.745.745 0 01-.695.483h-18zm16.71-1.5c-.482-1.232-.961-3.47-.961-7.5 0-3.722-3.028-6.75-6.75-6.75s-6.75 3.028-6.75 6.75c0 3.957-.58 6.277-1.046 7.5h15.507z"}})])
          )
        }
      }
    