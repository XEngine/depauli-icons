
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24a.75.75 0 01-.75-.75v-.75h-9v.75a.75.75 0 01-1.5 0v-.75H4.799A1.801 1.801 0 013 20.701V1.799C3 .807 3.807 0 4.799 0h14.402C20.193 0 21 .807 21 1.799v18.902c0 .992-.807 1.799-1.799 1.799H18v.75a.75.75 0 01-.75.75zM4.5 20.701a.3.3 0 00.299.299h14.402a.3.3 0 00.299-.299V15h-15v5.701zm15-7.201V1.799a.3.3 0 00-.299-.299H12.75v12h6.75zm-8.25 0v-12H4.799a.3.3 0 00-.299.299V13.5h6.75z"}}),_c('path',{attrs:{"d":"M9 10.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75zM15 10.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75zM9.75 18a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z"}})])
          )
        }
      }
    