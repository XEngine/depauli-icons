
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
            children.concat([_c('path',{attrs:{"d":"M13.5 5.998a.75.75 0 010-1.5h9.75a.75.75 0 010 1.5H13.5zM13.5 1.498a.75.75 0 010-1.5h9.75a.75.75 0 010 1.5H13.5zM13.5 10.498a.75.75 0 010-1.5h9.75a.75.75 0 010 1.5H13.5zM.75 14.998a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75zM.75 19.498a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75zM.75 23.998a.75.75 0 010-1.5h16.5a.75.75 0 010 1.5H.75zM2.25 10.498A2.252 2.252 0 010 8.248v-6a2.252 2.252 0 012.25-2.25h6a2.252 2.252 0 012.25 2.25v6a2.252 2.252 0 01-2.25 2.25h-6zm0-9a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75h-6z"}})])
          )
        }
      }
    