
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
            children.concat([_c('path',{attrs:{"d":"M12 24C6.21 24 1.5 19.29 1.5 13.5a.75.75 0 01.75-.75h9v-1.5h-3a.75.75 0 010-1.5h3V3.375C11.25 1.514 12.764 0 14.625 0S18 1.514 18 3.375v.375a.75.75 0 01-1.5 0v-.375c0-1.034-.841-1.875-1.875-1.875s-1.875.841-1.875 1.875v9.375h9a.75.75 0 01.75.75C22.5 19.29 17.79 24 12 24zm-8.969-9.75A8.97 8.97 0 0012 22.5a8.97 8.97 0 008.969-8.25H3.031z"}})])
          )
        }
      }
    