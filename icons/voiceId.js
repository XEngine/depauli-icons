
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
            children.concat([_c('path',{attrs:{"d":"M15.75 24a.75.75 0 010-1.5h6a.75.75 0 00.75-.75v-6a.75.75 0 011.5 0v6A2.252 2.252 0 0121.75 24h-6zM23.25 9a.75.75 0 01-.75-.75v-6a.75.75 0 00-.75-.75h-6a.75.75 0 010-1.5h6A2.252 2.252 0 0124 2.25v6a.75.75 0 01-.75.75zM.75 9A.75.75 0 010 8.25v-6A2.252 2.252 0 012.25 0h6a.75.75 0 010 1.5h-6a.75.75 0 00-.75.75v6A.75.75 0 01.75 9zM2.25 24A2.252 2.252 0 010 21.75v-6a.75.75 0 011.5 0v6c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6zM12 18a.75.75 0 01-.75-.75V6.75a.75.75 0 011.5 0v10.5A.75.75 0 0112 18zM8.25 15.75A.75.75 0 017.5 15V9A.75.75 0 019 9v6a.75.75 0 01-.75.75zM15.75 15.75A.75.75 0 0115 15V9a.75.75 0 011.5 0v6a.75.75 0 01-.75.75zM4.5 14.25a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM19.5 14.25a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    