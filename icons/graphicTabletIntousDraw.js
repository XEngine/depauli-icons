
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24.002A2.252 2.252 0 010 21.752V7.502a2.252 2.252 0 012.25-2.25h9a.75.75 0 010 1.5h-9a.75.75 0 00-.75.75v14.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-12a.75.75 0 011.5 0v12a2.252 2.252 0 01-2.25 2.25H2.25z"}}),_c('path',{attrs:{"d":"M12.348 14.72a.749.749 0 01-.749-.795l.228-3.817a.748.748 0 01.152-.409l6.51-8.562A2.845 2.845 0 0120.776.003c.628 0 1.224.2 1.725.578a2.877 2.877 0 01.572 4.015l-6.516 8.57a.754.754 0 01-.35.254l-3.613 1.259a.76.76 0 01-.246.041zm.816-1.828l2.336-.814 6.372-8.38a1.372 1.372 0 00-2.188-1.654l-6.373 8.382-.147 2.466z"}})])
          )
        }
      }
    