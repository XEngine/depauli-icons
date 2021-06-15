
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
            children.concat([_c('path',{attrs:{"d":"M20.25 24a.75.75 0 01-.75-.75V21h-2.25a.75.75 0 010-1.5h2.25v-2.25a.75.75 0 011.5 0v2.25h2.25a.75.75 0 010 1.5H21v2.25a.75.75 0 01-.75.75zM2.25 21A2.252 2.252 0 010 18.75V2.25A2.252 2.252 0 012.25 0h16.5A2.252 2.252 0 0121 2.25v12a.75.75 0 01-1.5 0v-12a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h12a.75.75 0 010 1.5h-12z"}})])
          )
        }
      }
    