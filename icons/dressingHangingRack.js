
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
            children.concat([_c('path',{attrs:{"d":"M9 24a.75.75 0 010-1.5h2.25v-9.058c-2.55-.368-4.5-2.584-4.5-5.192a.75.75 0 011.5 0c0 1.781 1.288 3.32 3 3.672v-5.98C8.7 5.574 6.75 3.357 6.75.75a.75.75 0 011.5 0c0 1.781 1.288 3.32 3 3.672V.75a.75.75 0 011.5 0v6.672c1.712-.352 3-1.892 3-3.672a.75.75 0 011.5 0c0 2.607-1.95 4.824-4.5 5.192v5.98c1.712-.352 3-1.892 3-3.672a.75.75 0 011.5 0c0 2.607-1.95 4.824-4.5 5.192V22.5H15a.75.75 0 010 1.5H9z"}})])
          )
        }
      }
    