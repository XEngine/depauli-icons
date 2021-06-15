
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v19.5A2.252 2.252 0 0121.75 24H2.25zm19.5-1.5a.75.75 0 00.75-.75V19.5h-6v3h5.25zm-6.75 0v-3H9v3h6zm-13.5-.75c0 .414.336.75.75.75H7.5v-3h-6v2.25zm21-3.75v-3h-6v3h6zM15 18v-3H9v3h6zm-7.5 0v-3h-6v3h6zm15-4.5V6.061l-4.783 3.827a3.758 3.758 0 01-1.217.645V13.5h6zm-7.5 0v-2.813a3.725 3.725 0 01-1.303-.374L9.63 8.28A2.16 2.16 0 009 8.078V13.5h6zm-7.5 0V8.346c-.1.056-.193.12-.281.19L1.5 13.11v.39h6zm-5.25-12a.75.75 0 00-.75.75v8.94l4.781-3.825a3.747 3.747 0 011.799-.779.694.694 0 01.153-.021 3.738 3.738 0 012.069.373l4.066 2.033a2.25 2.25 0 001.005.237 2.27 2.27 0 001.408-.491L22.5 4.14V2.25a.75.75 0 00-.75-.75H2.25z"}})])
          )
        }
      }
    