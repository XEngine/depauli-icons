
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
            children.concat([_c('path',{attrs:{"d":"M2.236 24A2.318 2.318 0 010 21.619V5.357C-.042 4.109.955 3.046 2.223 3H4.5V.75a.75.75 0 011.5 0V3h3V.75a.75.75 0 011.5 0V3h3V.75a.75.75 0 011.5 0V3h3V.75a.75.75 0 011.5 0V3h2.25c1.288.046 2.291 1.114 2.25 2.382v16.256A2.31 2.31 0 0121.777 24H2.236zm.021-19.5a.803.803 0 00-.758.833v16.311a.818.818 0 00.777.857h19.473c.422-.016.765-.389.75-.833V5.358a.819.819 0 00-.777-.858h-2.223v.75a.75.75 0 11-1.499 0V4.5h-3v.75a.75.75 0 01-1.5 0V4.5h-3v.75a.75.75 0 01-1.5 0V4.5H6v.75a.75.75 0 01-1.5 0V4.5H2.257z"}}),_c('path',{attrs:{"d":"M6.75 10.5a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H6.75zM6.75 15a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H6.75zM6.75 19.5a.75.75 0 010-1.5H12a.75.75 0 010 1.5H6.75z"}})])
          )
        }
      }
    