
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.528 24 17.25 20.972 24 17.25 24zm0-12C14.355 12 12 14.355 12 17.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.145 12 17.25 12z"}}),_c('path',{attrs:{"d":"M17.25 21a.75.75 0 01-.75-.75V18h-2.25a.75.75 0 010-1.5h2.25v-2.25a.75.75 0 011.5 0v2.25h2.25a.75.75 0 010 1.5H18v2.25a.75.75 0 01-.75.75zM.75 18a.75.75 0 01-.75-.75c.003-4.134 3.369-7.498 7.503-7.498a7.484 7.484 0 012.941.6.745.745 0 01.402.41.748.748 0 01-.696 1.03c-.101 0-.2-.02-.294-.06a5.964 5.964 0 00-2.349-.48 5.967 5.967 0 00-4.246 1.755A5.96 5.96 0 001.5 17.25a.75.75 0 01-.75.75zM7.5 9.75c-2.688 0-4.875-2.187-4.875-4.875S4.812 0 7.5 0s4.875 2.187 4.875 4.875S10.188 9.75 7.5 9.75zm0-8.25c-1.861 0-3.375 1.514-3.375 3.375S5.639 8.25 7.5 8.25s3.375-1.514 3.375-3.375S9.361 1.5 7.5 1.5z"}})])
          )
        }
      }
    