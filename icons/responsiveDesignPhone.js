
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24a2.252 2.252 0 01-2.25-2.25v-9a2.252 2.252 0 012.25-2.25h3a.75.75 0 010 1.5h-3a.75.75 0 00-.75.75v6.75h6v-.75a.75.75 0 011.5 0v3A2.252 2.252 0 018.25 24h-4.5zM3 21.75c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75V21H3v.75zM17.25 18a.75.75 0 010-1.5h3a.75.75 0 00.75-.75V15h-3.75a.75.75 0 010-1.5H21v-9h-9.75a.75.75 0 01-.75-.75v-1.5A2.252 2.252 0 0112.75 0h7.5a2.252 2.252 0 012.25 2.25v13.5A2.252 2.252 0 0120.25 18h-3zM21 3v-.75a.75.75 0 00-.75-.75h-7.5a.75.75 0 00-.75.75V3h9z"}}),_c('path',{attrs:{"d":"M9.75 16.5a.755.755 0 01-.26-.047l-.022-.008A.754.754 0 019 15.75v-4.5a.75.75 0 011.5 0v2.689L16.939 7.5H14.25a.75.75 0 010-1.5h4.5a.735.735 0 01.293.06.75.75 0 01.4.404l.01.026c.03.082.047.17.047.26v4.5a.75.75 0 01-1.5 0V8.561L11.561 15h2.689a.75.75 0 010 1.5h-4.5z"}})])
          )
        }
      }
    