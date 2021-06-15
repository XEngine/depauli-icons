
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
            children.concat([_c('path',{attrs:{"d":"M1.5 7.5a.75.75 0 01-.75-.75v-3A2.252 2.252 0 013 1.5h18a2.252 2.252 0 012.25 2.25v3a.75.75 0 01-.75.75h-21zM21.75 6V3.75A.75.75 0 0021 3H3a.75.75 0 00-.75.75V6h19.5zM3 22.5a2.252 2.252 0 01-2.25-2.25.75.75 0 011.5 0c0 .414.336.75.75.75h18a.75.75 0 00.75-.75v-3a.75.75 0 011.5 0v3A2.252 2.252 0 0121 22.5H3zM9 18a.75.75 0 01-.75-.75V10.5H7.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-.75v6.75A.75.75 0 019 18z"}}),_c('path',{attrs:{"d":"M15 18a.75.75 0 01-.75-.75V10.5h-.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-.75v6.75A.75.75 0 0115 18zM4.5 18a.75.75 0 01-.75-.75V15h-1.5v2.25a.75.75 0 01-1.5 0v-7.5a.75.75 0 011.5 0v3.75h1.5V9.75a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75zM19.5 18a.75.75 0 01-.75-.75v-7.5A.75.75 0 0119.5 9h.75c1.654 0 3 1.346 3 3s-1.346 3-3 3v2.25a.75.75 0 01-.75.75zm.75-4.5c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5v3z"}})])
          )
        }
      }
    