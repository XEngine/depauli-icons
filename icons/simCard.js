
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
            children.concat([_c('path',{attrs:{"d":"M4.75 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 014.75 0h10.56c.646.002 1.259.28 1.684.763l4.417 4.277.047.05c.35.408.542.928.542 1.465V21.75A2.252 2.252 0 0119.75 24h-15zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h15a.75.75 0 00.75-.75V6.555a.758.758 0 00-.162-.466l-4.411-4.271a.812.812 0 01-.051-.055.745.745 0 00-.568-.263H13v3.75a.75.75 0 01-1.5 0V1.5h-3v3.75a.75.75 0 01-1.5 0V1.5H4.75z"}}),_c('path',{attrs:{"d":"M9.25 21A2.252 2.252 0 017 18.75v-3a2.252 2.252 0 012.25-2.25h4.5A2.252 2.252 0 0116 15.75v3A2.252 2.252 0 0113.75 21h-4.5zm-.75-2.25c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75V18h-.75a.75.75 0 010-1.5h.75v-.75a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75v.75h.75a.75.75 0 010 1.5H8.5v.75z"}})])
          )
        }
      }
    