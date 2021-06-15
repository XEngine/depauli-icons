
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-.96 0-1.808-.615-2.121-1.5H.75a.75.75 0 010-1.5h9.128a2.243 2.243 0 011.372-1.372V17.25a.75.75 0 011.5 0v2.378c.642.226 1.146.73 1.372 1.372h9.128a.75.75 0 010 1.5h-9.129A2.258 2.258 0 0112 24zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM9.75 15a.75.75 0 010-1.5h1.5V12H6a2.252 2.252 0 01-2.25-2.25v-7.5A2.252 2.252 0 016 0h12a2.252 2.252 0 012.25 2.25v7.5A2.252 2.252 0 0118 12h-5.25v1.5h1.5a.75.75 0 010 1.5h-4.5zm-4.5-5.25c0 .414.336.75.75.75h12a.75.75 0 00.75-.75V9H5.25v.75zm13.5-2.25V2.25A.75.75 0 0018 1.5H6a.75.75 0 00-.75.75V7.5h13.5z"}})])
          )
        }
      }
    