
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
            children.concat([_c('path',{attrs:{"d":"M8.761 24a2.248 2.248 0 01-2.183-1.704L3.247 8.97a2.25 2.25 0 01.171-1.551l3.087-6.175A2.235 2.235 0 018.517 0h7.146a2.243 2.243 0 012.008 1.243l3.088 6.175c.24.481.299 1.032.169 1.552l-3.326 13.325A2.247 2.247 0 0115.419 24H8.761zM8.517 1.5a.747.747 0 00-.671.414L4.759 8.089c-.08.16-.1.344-.057.517l3.332 13.325a.748.748 0 00.727.569h6.658a.75.75 0 00.728-.568l3.326-13.326a.749.749 0 00-.056-.518L16.33 1.914a.749.749 0 00-.669-.414H8.517z"}}),_c('path',{attrs:{"d":"M12.09 17.25a.75.75 0 01-.75-.75V9H9.09a.75.75 0 010-1.5h2.25V5.25a.75.75 0 011.5 0V7.5h2.25a.75.75 0 010 1.5h-2.25v7.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    