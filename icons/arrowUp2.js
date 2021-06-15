
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24.003a2.25 2.25 0 01-1.599-.674A2.246 2.246 0 013 21.727V9.432a2.269 2.269 0 01.654-1.602L10.936.447A1.477 1.477 0 0112 .002c.393 0 .764.151 1.044.426l7.301 7.402c.424.431.656 1 .655 1.603v12.299a2.262 2.262 0 01-2.245 2.271H5.25zM4.723 8.882a.78.78 0 00-.223.549v12.3a.761.761 0 00.755.772H18.75a.76.76 0 00.75-.766V9.432a.78.78 0 00-.224-.551L12 1.504 4.723 8.882z"}})])
          )
        }
      }
    