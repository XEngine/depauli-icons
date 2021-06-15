
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M20.32.67a3.5 3.5 0 103.5 3.5 3.5 3.5 0 00-3.5-3.5zm0 5.5a2 2 0 112-2 2 2 0 01-2 2zM20.32 8.5a3.5 3.5 0 103.5 3.5 3.5 3.5 0 00-3.5-3.5zm0 5.5a2 2 0 112-2 2 2 0 01-2 2zM23.82 19.83a3.5 3.5 0 10-3.5 3.5 3.5 3.5 0 003.5-3.5zm-3.5 2a2 2 0 112-2 2 2 0 01-2 2zM12 7.67a3.5 3.5 0 10-3.5-3.5 3.5 3.5 0 003.5 3.5zm0-5.5a2 2 0 11-2 2 2 2 0 012-2zM12 15.5A3.5 3.5 0 108.5 12a3.5 3.5 0 003.5 3.5zm0-5.5a2 2 0 11-2 2 2 2 0 012-2zM7.18 12a3.5 3.5 0 10-3.5 3.5 3.5 3.5 0 003.5-3.5zm-5.5 0a2 2 0 112 2 2 2 0 01-2-2zM12 23.33a3.5 3.5 0 10-3.5-3.5 3.5 3.5 0 003.5 3.5zm0-5.5a2 2 0 11-2 2 2 2 0 012-2z"}})])
          )
        }
      }
    