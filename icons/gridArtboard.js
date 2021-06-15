
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
            children.concat([_c('path',{attrs:{"d":"M6.75 19.5a2.252 2.252 0 01-2.25-2.25V6.75A2.252 2.252 0 016.75 4.5h10.5a2.252 2.252 0 012.25 2.25v10.5a2.252 2.252 0 01-2.25 2.25H6.75zm0-13.5a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75V6.75a.75.75 0 00-.75-.75H6.75zM18.75 3a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM21.75 6a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM18.75 24a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM21.75 19.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM5.25 24a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM.75 19.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5H.75zM.75 6a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5H.75zM5.25 3a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    