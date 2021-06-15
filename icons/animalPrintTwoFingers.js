
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
            children.concat([_c('path',{attrs:{"d":"M6.681 23.759c-2.183 0-4.072-1.632-4.394-3.797l-.862-6.509c-.491-3.716.123-6.843 1.823-9.292C4.673 2.109 6.552.99 7.878.414A1.495 1.495 0 018.85.332a1.502 1.502 0 011.088 1.821 21.815 21.815 0 00-.803 6.646c.384 2.848 2.047 9.824 2.064 9.894.007.031.012.059.016.088a4.458 4.458 0 01-3.897 4.931 4.272 4.272 0 01-.637.047zM8.482 1.787c-5.83 2.535-5.992 8.274-5.57 11.47l.86 6.494a2.966 2.966 0 003.348 2.475c1.609-.191 2.771-1.636 2.609-3.23-.2-.839-1.717-7.251-2.086-10.036a.886.886 0 01-.006-.074 23.292 23.292 0 01.845-7.099c.001 0 0 0 0 0zM17.501 23.741a4.511 4.511 0 01-4.482-4.95.675.675 0 01.017-.1c.069-.291 1.688-7.103 2.064-9.895a21.744 21.744 0 00-.799-6.626 1.507 1.507 0 01.167-1.158A1.49 1.49 0 0115.75.289c.207 0 .416.044.604.126 1.324.576 3.204 1.693 4.63 3.746 1.702 2.45 2.315 5.576 1.823 9.293l-.863 6.497-.005.032a4.484 4.484 0 01-4.438 3.758zm-2.994-4.753a3.014 3.014 0 002.991 3.253 2.993 2.993 0 002.961-2.506l.86-6.479c.986-7.443-3.063-10.379-5.565-11.467l-.004-.376v.375c.646 2.299.932 4.691.846 7.098l-.005.068c-.368 2.782-1.881 9.183-2.084 10.034z"}})])
          )
        }
      }
    