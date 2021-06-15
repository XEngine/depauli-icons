
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
            children.concat([_c('path',{attrs:{"d":"M.75 24.001a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75zM9.505 21.477a9.685 9.685 0 01-6.894-2.851l-1.5-1.5a3.754 3.754 0 010-5.303L11.844 1.098A3.723 3.723 0 0114.495.002c1.002 0 1.944.389 2.651 1.096l5.739 5.738a3.754 3.754 0 010 5.303l-6.487 6.486a9.674 9.674 0 01-6.893 2.852zm-7.334-8.593a2.254 2.254 0 000 3.181l1.5 1.5a8.194 8.194 0 005.834 2.412 8.194 8.194 0 005.833-2.412l1.708-1.708-8.922-8.921-5.953 5.948zm15.936 1.913l3.718-3.718a2.253 2.253 0 000-3.182l-5.739-5.738a2.234 2.234 0 00-1.591-.657c-.602 0-1.167.234-1.591.657L9.185 5.875l8.922 8.922z"}})])
          )
        }
      }
    