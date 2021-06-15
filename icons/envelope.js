
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
            children.concat([_c('path',{attrs:{"d":"M2.25 20.25A2.252 2.252 0 010 18V6a2.25 2.25 0 01.599-1.524A2.255 2.255 0 012.25 3.75h19.5a2.253 2.253 0 011.703.784c.351.404.547.927.547 1.466v12a2.252 2.252 0 01-2.25 2.25H2.25zM1.5 18c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V6.187l-5.616 3.873 3.125 2.889a.751.751 0 01-.509 1.301.75.75 0 01-.509-.199l-3.373-3.118-1.825 1.259a3.135 3.135 0 01-1.793.556 3.14 3.14 0 01-1.793-.556l-1.825-1.258-3.373 3.118a.754.754 0 01-1.06-.042.751.751 0 01.041-1.06l3.125-2.889L1.5 6.187V18zm9.559-7.043c.276.191.601.291.941.291.34 0 .665-.101.941-.291l8.276-5.707H2.783l8.276 5.707z"}})])
          )
        }
      }
    