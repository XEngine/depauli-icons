
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
            children.concat([_c('path',{attrs:{"d":"M4.75 24C3.785 24 3 23.215 3 22.25V1.75C3 .785 3.785 0 4.75 0h14.5C20.215 0 21 .785 21 1.75v20.5c0 .965-.785 1.75-1.75 1.75H4.75zm0-22.5a.25.25 0 00-.25.25v20.5c0 .138.112.25.25.25h14.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H4.75z"}}),_c('path',{attrs:{"d":"M6.75 21a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM11.25 21a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM6.75 18a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM11.25 18a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM11.1 13.2a.747.747 0 01-.671-.414l-.582-1.165-1.281-.233a.744.744 0 01-.482-.311.745.745 0 01-.121-.561.747.747 0 01.871-.604l1.193.217 2.207-2.943-2.83-.762a.75.75 0 01.391-1.448l3.41.918L14.7 3.9a.754.754 0 011.049-.151c.332.249.399.72.151 1.051l-1.495 1.994 1.836 3.016a.752.752 0 01-.64 1.14.746.746 0 01-.641-.36l-1.524-2.503-2.207 2.943.543 1.085A.751.751 0 0111.1 13.2z"}})])
          )
        }
      }
    