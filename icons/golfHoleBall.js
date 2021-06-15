
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
            children.concat([_c('path',{attrs:{"d":"M11.247 24.002c-4.703 0-8.25-1.612-8.25-3.75 0-1.479 1.578-2.692 4.331-3.33a.746.746 0 01.9.561.746.746 0 01-.094.566.745.745 0 01-.467.334c-2.081.482-3.169 1.305-3.169 1.869 0 1.056 2.815 2.086 6.003 2.232V.75a.746.746 0 01.75-.75c.108 0 .212.023.31.067l8.251 3.75a.748.748 0 01.439.712.747.747 0 01-.493.676L12 8.026v14.458c3.185-.147 5.997-1.177 5.997-2.232 0-.564-1.088-1.388-3.166-1.869a.747.747 0 01-.561-.899.746.746 0 01.9-.562c2.75.637 4.328 1.851 4.328 3.331-.001 2.137-3.547 3.749-8.251 3.749zM12 6.429l5.518-2.006L12 1.915v4.514z"}})])
          )
        }
      }
    