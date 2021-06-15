
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
            children.concat([_c('path',{attrs:{"d":"M3.75 21A3.754 3.754 0 010 17.25v-9A3.754 3.754 0 013.75 4.5h.75v-.75a.75.75 0 011.5 0v.75h14.25A3.754 3.754 0 0124 8.25v9A3.754 3.754 0 0120.25 21H3.75zM1.5 17.25a2.252 2.252 0 002.25 2.25h16.5a2.252 2.252 0 002.25-2.25v-9A2.252 2.252 0 0020.25 6H3.75A2.252 2.252 0 001.5 8.25V9h6a.75.75 0 010 1.5h-6V12h6a.75.75 0 010 1.5h-6V15h6a.75.75 0 010 1.5h-6v.75z"}}),_c('path',{attrs:{"d":"M15.75 18a5.256 5.256 0 01-5.25-5.25c0-2.895 2.355-5.25 5.25-5.25S21 9.855 21 12.75A5.256 5.256 0 0115.75 18zm-3.672-4.5c.352 1.712 1.892 3 3.672 3s3.32-1.288 3.672-3h-7.344zm7.344-1.5c-.352-1.712-1.892-3-3.672-3s-3.32 1.288-3.672 3h7.344z"}})])
          )
        }
      }
    