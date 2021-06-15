
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
            children.concat([_c('path',{attrs:{"d":"M14.197 24.001a.751.751 0 01-.723-.553l-1.526-5.597-1.526 5.597a.752.752 0 01-.922.525.75.75 0 01-.526-.92l1.976-7.247c-3.993.445-7.272 3.549-7.898 7.56a.744.744 0 01-.855.625.745.745 0 01-.626-.857c.789-5.061 5.241-8.878 10.358-8.884h.038c.534.001 1.072.044 1.599.126a10.47 10.47 0 018.758 8.758.752.752 0 01-.742.866.746.746 0 01-.74-.634 8.971 8.971 0 00-7.896-7.559l1.976 7.246a.74.74 0 01-.073.569.744.744 0 01-.652.379zM11.948 13.5a6.755 6.755 0 01-6.708-6h-.792a.75.75 0 010-1.5h.792c.376-3.392 3.256-6 6.708-6s6.332 2.608 6.707 6h.792a.75.75 0 010 1.5h-.792a6.753 6.753 0 01-6.707 6zm-5.195-6c.367 2.554 2.575 4.5 5.195 4.5s4.828-1.946 5.195-4.5h-.824A2.258 2.258 0 0114.198 9c-1.235 0-2.241-1-2.25-2.233A2.252 2.252 0 019.698 9a2.26 2.26 0 01-2.122-1.5h-.823zM14.198 6a.75.75 0 100 1.5.75.75 0 000-1.5zm-4.5 0a.75.75 0 100 1.5.75.75 0 000-1.5zm0-1.5c1.235 0 2.241 1 2.25 2.233a2.252 2.252 0 012.25-2.233c.96 0 1.808.615 2.121 1.5h.824c-.367-2.554-2.575-4.5-5.195-4.5S7.12 3.447 6.753 6h.824a2.258 2.258 0 012.121-1.5z"}})])
          )
        }
      }
    