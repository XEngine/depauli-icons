
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V2.25A2.252 2.252 0 012.25 0h13.5a.75.75 0 010 1.5H2.25a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75H13.5v-6.75a2.252 2.252 0 012.25-2.25h6.75v-3a.75.75 0 011.5 0v3.129c0 .317-.066.626-.197.919l-.006.013a2.27 2.27 0 01-.455.659l-8.123 8.121a2.24 2.24 0 01-.691.47 2.2 2.2 0 01-.899.189H2.25zm13.5-9a.75.75 0 00-.75.75v5.689L21.44 15h-5.69z"}}),_c('path',{attrs:{"d":"M21.75 9a.75.75 0 01-.75-.75V6h-1.5v2.25a.75.75 0 01-1.5 0v-6C18 1.009 19.009 0 20.25 0s2.25 1.009 2.25 2.25v6a.75.75 0 01-.75.75zM21 4.5V2.25a.75.75 0 00-1.5 0V4.5H21zM7.5 7.5a.75.75 0 010-1.5h5.25a.75.75 0 010 1.5H7.5zM4.5 12a.75.75 0 010-1.5h8.25a.75.75 0 010 1.5H4.5zM4.5 16.5a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    