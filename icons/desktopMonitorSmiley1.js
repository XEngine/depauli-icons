
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
            children.concat([_c('path',{attrs:{"d":"M6 22.5A.75.75 0 016 21h1.615l.5-3H2.25A2.252 2.252 0 010 15.75v-12A2.252 2.252 0 012.25 1.5h19.5A2.252 2.252 0 0124 3.75v12A2.252 2.252 0 0121.75 18h-5.865l.5 3H18a.75.75 0 010 1.5H6zm8.865-1.5l-.5-3h-4.73l-.5 3h5.73zM2.25 3a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M12 13.51a6.487 6.487 0 01-4.377-1.706.751.751 0 01.505-1.304c.188 0 .367.07.505.196a4.989 4.989 0 003.366 1.313 4.991 4.991 0 003.367-1.313.749.749 0 111.01 1.109A6.487 6.487 0 0112 13.51zM9.75 9A.75.75 0 019 8.25v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM14.25 9a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    