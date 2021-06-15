
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
            children.concat([_c('path',{attrs:{"d":"M9 24a.75.75 0 010-1.5h2.25V8.942c-2.55-.368-4.5-2.585-4.5-5.192V1.5c0-.827.673-1.5 1.5-1.5h7.5c.827 0 1.5.673 1.5 1.5v2.25c0 2.607-1.95 4.824-4.5 5.192V22.5H15a.75.75 0 010 1.5H9zM8.25 3.75A3.754 3.754 0 0012 7.5a3.754 3.754 0 003.75-3.75V1.5h-7.5v2.25z"}})])
          )
        }
      }
    