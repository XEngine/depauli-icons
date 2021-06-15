
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v19.5A2.252 2.252 0 0121.75 24H2.25zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M13.5 14.25a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM13.5 17.25a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM13.5 20.25a.75.75 0 010-1.5h3.75a.75.75 0 010 1.5H13.5zM3.75 14.25a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM3.75 17.25a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM3.75 20.25a.75.75 0 010-1.5H7.5a.75.75 0 010 1.5H3.75zM4.5 10.5C3.673 10.5 3 9.827 3 9V4.5C3 3.673 3.673 3 4.5 3h15c.827 0 1.5.673 1.5 1.5V9c0 .827-.673 1.5-1.5 1.5h-15zm0-1.5h15V4.5h-15V9z"}})])
          )
        }
      }
    