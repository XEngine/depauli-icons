
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
            children.concat([_c('path',{attrs:{"d":"M13.5 20.17a.75.75 0 01-.75-.75v-2.369l-7.219-1.55c-.59-.097-1.031-.625-1.031-1.251V5.775a1.267 1.267 0 01.533-1.037 1.265 1.265 0 01.95-.221l12.473 2.454A1.26 1.26 0 0119.5 8.225V16.7a1.27 1.27 0 01-1.273 1.276c-.071 0-.142-.006-.212-.018l-1.708-.284-2.277 2.276a.743.743 0 01-.53.22zm.157-4.458a.754.754 0 01.593.733v1.164l1.27-1.27a.743.743 0 01.653-.21l1.827.306V8.41L6.002 6.049 6 14.069l7.657 1.643z"}}),_c('path',{attrs:{"d":"M1.75 24C.785 24 0 23.215 0 22.25V1.75C0 .785.785 0 1.75 0h20.5C23.215 0 24 .785 24 1.75v20.5c0 .965-.785 1.75-1.75 1.75H1.75zm0-22.5a.25.25 0 00-.25.25v20.5c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75z"}})])
          )
        }
      }
    