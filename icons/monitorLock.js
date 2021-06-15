
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-.96 0-1.808-.615-2.121-1.5H.75a.75.75 0 010-1.5h9.128a2.243 2.243 0 011.372-1.372V17.25a.75.75 0 011.5 0v2.378c.642.226 1.146.73 1.372 1.372h9.128a.75.75 0 010 1.5h-9.129A2.258 2.258 0 0112 24zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM9.75 15a.75.75 0 010-1.5h1.5V12H6a2.252 2.252 0 01-2.25-2.25v-7.5A2.252 2.252 0 016 0h8.25a.75.75 0 010 1.5H6a.75.75 0 00-.75.75V7.5h7.5a.75.75 0 010 1.5h-7.5v.75c0 .414.336.75.75.75h7.5a.75.75 0 010 1.5h-.75v1.5h1.5a.75.75 0 010 1.5h-4.5z"}}),_c('path',{attrs:{"d":"M17.25 10.5A2.252 2.252 0 0115 8.25v-3c0-.96.615-1.808 1.5-2.121V3c0-1.654 1.346-3 3-3s3 1.346 3 3v.129A2.258 2.258 0 0124 5.25v3a2.252 2.252 0 01-2.25 2.25h-4.5zm0-6a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zM21 3c0-.827-.673-1.5-1.5-1.5S18 2.173 18 3h3z"}}),_c('path',{attrs:{"d":"M19.5 7.875c-.62 0-1.125-.505-1.125-1.125s.505-1.125 1.125-1.125l.074.005a1.119 1.119 0 011.051 1.12c0 .62-.505 1.125-1.125 1.125z"}})])
          )
        }
      }
    