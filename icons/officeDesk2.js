
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
            children.concat([_c('path',{attrs:{"d":"M14.75 23.988c-.689 0-1.25-.561-1.25-1.25v-7.75h-12v8.25a.75.75 0 01-1.5 0v-11.5c0-.689.561-1.25 1.25-1.25H9v-1.5H5.25A2.252 2.252 0 013 6.738v-4.5a2.252 2.252 0 012.25-2.25h9a2.252 2.252 0 012.25 2.25v4.5a2.252 2.252 0 01-2.25 2.25H10.5v1.5h12.25c.689 0 1.25.561 1.25 1.25v11c0 .689-.561 1.25-1.25 1.25h-8zm7.75-1.5v-3H15v3h7.5zm0-4.5v-3H15v3h7.5zm0-4.5v-1.5h-21v1.5h21zm-17.25-12a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h9a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-9z"}})])
          )
        }
      }
    