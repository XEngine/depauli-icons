
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
            children.concat([_c('path',{attrs:{"d":"M15 12.75a2.252 2.252 0 01-2.25-2.25c0-1.068 1.327-2.409 1.734-2.794a.75.75 0 011.032-.001c.407.386 1.734 1.727 1.734 2.795A2.252 2.252 0 0115 12.75zm0-3.415c-.51.585-.75 1.028-.75 1.165a.75.75 0 001.5 0c0-.137-.24-.58-.75-1.165z"}}),_c('path',{attrs:{"d":"M12 24c-5.376 0-9.75-4.374-9.75-9.75A.75.75 0 013 13.5h5.25V3.75A3.754 3.754 0 0112 0a3.754 3.754 0 013.75 3.75v.75a.75.75 0 01-1.5 0v-.75A2.252 2.252 0 0012 1.5a2.252 2.252 0 00-2.25 2.25v9.75H21a.75.75 0 01.75.75c0 5.376-4.374 9.75-9.75 9.75zm-8.216-9A8.229 8.229 0 0012 22.5c4.3 0 7.837-3.264 8.216-7.5H3.784z"}})])
          )
        }
      }
    