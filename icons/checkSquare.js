
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
            children.concat([_c('path',{attrs:{"d":"M11.29 15.001a2.277 2.277 0 01-1.856-.953L6.14 9.436a.751.751 0 011.221-.872l3.294 4.611a.767.767 0 00.634.325.763.763 0 00.593-.28L22.674.269A.747.747 0 0123.73.173a.742.742 0 01.267.508.742.742 0 01-.171.548L13.034 14.181a2.313 2.313 0 01-.426.395 2.251 2.251 0 01-1.318.425z"}}),_c('path',{attrs:{"d":"M3.75 24A3.754 3.754 0 010 20.25v-15A3.754 3.754 0 013.75 1.5H16.5a.75.75 0 010 1.5H3.75A2.253 2.253 0 001.5 5.25v15a2.252 2.252 0 002.25 2.25h15A2.252 2.252 0 0021 20.25V10.5a.75.75 0 011.5 0v9.75A3.754 3.754 0 0118.75 24h-15z"}})])
          )
        }
      }
    