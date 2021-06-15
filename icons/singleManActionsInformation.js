
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
            children.concat([_c('path',{attrs:{"d":"M.75 18a.75.75 0 01-.75-.75c.003-4.134 3.369-7.498 7.503-7.498a7.484 7.484 0 012.941.6.745.745 0 01.402.41.748.748 0 01-.696 1.03c-.101 0-.2-.02-.294-.06a5.964 5.964 0 00-2.349-.48 5.967 5.967 0 00-4.246 1.755A5.96 5.96 0 001.5 17.25a.75.75 0 01-.75.75zM7.5 9.75a4.88 4.88 0 01-4.875-4.875c0-.839.221-1.669.639-2.404.017-.035.035-.061.046-.077A4.9 4.9 0 017.5 0c2.387 0 4.453 1.777 4.814 4.138a.689.689 0 01.022.153c.026.214.039.405.039.584A4.88 4.88 0 017.5 9.75zM4.23 4.037A3.379 3.379 0 007.5 8.25a3.38 3.38 0 003.339-2.883 7.57 7.57 0 01-1.959.258h-.006A7.59 7.59 0 014.23 4.037zm4.65.088c.625 0 1.24-.095 1.832-.282A3.397 3.397 0 007.5 1.5c-.987 0-1.922.437-2.561 1.184a6.167 6.167 0 003.932 1.441H8.88zM17.25 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.528 24 17.25 20.972 24 17.25 24zm0-12C14.355 12 12 14.355 12 17.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.145 12 17.25 12z"}}),_c('path',{attrs:{"d":"M17.25 21a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM17.25 15.75c-.62 0-1.125-.505-1.125-1.125a1.127 1.127 0 011.923-.794 1.126 1.126 0 01-.798 1.919z"}})])
          )
        }
      }
    