
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
            children.concat([_c('path',{attrs:{"d":"M20.25 19.5a.75.75 0 01-.75-.75V18h-15v.75a.75.75 0 01-1.5 0V18h-.75A2.252 2.252 0 010 15.75v-9A2.252 2.252 0 012.25 4.5h19.5A2.252 2.252 0 0124 6.75v9A2.252 2.252 0 0121.75 18H21v.75a.75.75 0 01-.75.75zM1.5 15.75c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V15h-21v.75zm21-2.25v-3h-12v3h12zM9 13.5V6H2.25a.75.75 0 00-.75.75v6.75H9zM22.5 9V6.75a.75.75 0 00-.75-.75H10.5v3h12z"}}),_c('path',{attrs:{"d":"M6.75 10.5A.75.75 0 016 9.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    