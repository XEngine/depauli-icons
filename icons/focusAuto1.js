
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
            children.concat([_c('path',{attrs:{"d":"M15.75 18.75A.75.75 0 0115 18v-4.5H9V18a.75.75 0 01-1.5 0V9.75c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5V18a.75.75 0 01-.75.75zM15 12V9.75c0-1.654-1.346-3-3-3s-3 1.346-3 3V12h6zM.75 5.25A.75.75 0 010 4.5V2.25A2.252 2.252 0 012.25 0H4.5a.75.75 0 010 1.5H2.25a.75.75 0 00-.75.75V4.5a.75.75 0 01-.75.75zM23.25 5.25a.75.75 0 01-.75-.75V2.25a.75.75 0 00-.75-.75H19.5a.75.75 0 010-1.5h2.25A2.252 2.252 0 0124 2.25V4.5a.75.75 0 01-.75.75zM2.25 24A2.252 2.252 0 010 21.75V19.5a.75.75 0 011.5 0v2.25c0 .414.336.75.75.75H4.5a.75.75 0 010 1.5H2.25zM19.5 24a.75.75 0 010-1.5h2.25a.75.75 0 00.75-.75V19.5a.75.75 0 011.5 0v2.25A2.252 2.252 0 0121.75 24H19.5z"}})])
          )
        }
      }
    