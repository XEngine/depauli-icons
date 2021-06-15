
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
            children.concat([_c('path',{attrs:{"d":"M1.25 24C.561 24 0 23.439 0 22.75v-9c0-.88.653-1.61 1.5-1.732V2.25a1.502 1.502 0 012.4-1.2L8.1 4.2c.564.423.9 1.096.9 1.8v6.018c.847.122 1.5.852 1.5 1.732v9c0 .689-.561 1.25-1.25 1.25h-8zM9 22.5v-8.75a.25.25 0 00-.25-.25h-7a.25.25 0 00-.25.25v8.75H9zM7.5 12V6a.753.753 0 00-.3-.6L3 2.25V12h4.5zM14.75 24c-.689 0-1.25-.561-1.25-1.25v-11c0-.689.561-1.25 1.25-1.25h8c.689 0 1.25.561 1.25 1.25v11c0 .689-.561 1.25-1.25 1.25h-8zm7.75-1.5V21H15v1.5h7.5zm0-3V18H15v1.5h7.5zm0-3V12H15v4.5h7.5z"}}),_c('path',{attrs:{"d":"M3.75 21a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    