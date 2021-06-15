
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
            children.concat([_c('path',{attrs:{"d":"M20.25 24a.75.75 0 01-.75-.75v-.75h-15v.75a.75.75 0 01-1.5 0v-.75h-.75A2.252 2.252 0 010 20.25v-18A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v18a2.252 2.252 0 01-2.25 2.25H21v.75a.75.75 0 01-.75.75zM1.5 20.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V9h-21v11.25zm21-12.75V2.25a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75V7.5h21z"}}),_c('path',{attrs:{"d":"M10.5 5.25a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM10.5 13.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    