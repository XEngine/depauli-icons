
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
            children.concat([_c('path',{attrs:{"d":"M.75 16.875a.75.75 0 01-.75-.75v-5.25c0-1.492.894-2.839 2.25-3.433V2.625A2.252 2.252 0 014.5.375h12a2.252 2.252 0 012.25 2.25v5.25a.75.75 0 01-.75.75H3.75a2.252 2.252 0 00-2.25 2.25v1.5h6.75a.75.75 0 010 1.5H1.5v2.25a.75.75 0 01-.75.75zm16.5-9.75v-4.5a.75.75 0 00-.75-.75h-12a.75.75 0 00-.75.75v4.5h3v-1.25c0-.965.785-1.75 1.75-1.75h4c.965 0 1.75.785 1.75 1.75v1.25h3zm-4.5 0v-1.25a.25.25 0 00-.25-.25h-4a.25.25 0 00-.25.25v1.25h4.5z"}}),_c('path',{attrs:{"d":"M17.25 23.625c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.153 24 16.875s-3.028 6.75-6.75 6.75zm0-12c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25-2.355-5.25-5.25-5.25z"}}),_c('path',{attrs:{"d":"M14.25 17.625a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    