
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
            children.concat([_c('circle',{attrs:{"cx":"15.75","cy":"10.5","r":"1.125"}}),_c('path',{attrs:{"d":"M15.75 14.25A3.754 3.754 0 0112 10.5c0-2.068 1.682-3.75 3.75-3.75s3.75 1.682 3.75 3.75a3.754 3.754 0 01-3.75 3.75zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25S18 11.741 18 10.5s-1.009-2.25-2.25-2.25z"}}),_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M9.75 18.75a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM6.75 12a.75.75 0 010-1.5H9A.75.75 0 019 12H6.75zM14.25 6.05a.75.75 0 01-.625-1.164 2.53 2.53 0 012.129-1.141c.5 0 .985.147 1.405.426.285.189.526.43.716.716a.748.748 0 01-.625 1.163.749.749 0 01-.626-.336 1.055 1.055 0 00-1.083-.449 1.047 1.047 0 00-.667.449.743.743 0 01-.624.336zM5.25 9a.75.75 0 01-.65-1.124 2.24 2.24 0 011.84-1.125h.002c.656 0 1.095.268 1.448.484.277.169.443.265.633.265a.738.738 0 00.577-.374.752.752 0 011.023-.276.751.751 0 01.277 1.024 2.24 2.24 0 01-1.84 1.125h-.002c-.657 0-1.096-.268-1.449-.484-.277-.169-.443-.265-.632-.265a.738.738 0 00-.577.374.753.753 0 01-.65.376z"}})])
          )
        }
      }
    