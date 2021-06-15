
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
            children.concat([_c('path',{attrs:{"d":"M12 24a.75.75 0 01-.75-.75V18H7.5a.75.75 0 010-1.5h3.75V15H7.5a.75.75 0 010-1.5h3.75v-1.558c-2.55-.368-4.5-2.584-4.5-5.192v-6a.75.75 0 011.5 0v6A3.754 3.754 0 0012 10.5a3.754 3.754 0 003.75-3.75v-6a.75.75 0 011.5 0v6c0 2.607-1.95 4.824-4.5 5.192V13.5h3.75a.75.75 0 010 1.5h-3.75v1.5h3.75a.75.75 0 010 1.5h-3.75v5.25A.75.75 0 0112 24z"}})])
          )
        }
      }
    