
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
            children.concat([_c('path',{attrs:{"d":"M15 23.699c-.827 0-1.5-.673-1.5-1.5V11.7h-3v8.249h.75a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h.75V11.7h-3v11.249a.75.75 0 01-1.5 0V11.7c0-.827.673-1.5 1.5-1.5h3.724l.026-.001.03.001h4.444l.026-.001.03.001h3.72V7.203l.001-.035a.711.711 0 01.102-.346l.022-.038L17.501.97a1.493 1.493 0 011.25-.668 1.495 1.495 0 011.247.668l3.885 5.828.012.022a.623.623 0 01.07.163.52.52 0 01.018.066A.863.863 0 0124 7.2v15c0 .827-.673 1.5-1.5 1.5l-7.5-.001zm0-1.5l7.5.001V7.95H15v14.249zm-6-2.25V11.7H6v8.249h3zM21.849 6.45L18.75 1.802 15.651 6.45h6.198z"}}),_c('path',{attrs:{"d":"M18.75 14.699a2.252 2.252 0 01-2.25-2.25c0-1.241 1.009-2.25 2.25-2.25S21 11.208 21 12.449a2.252 2.252 0 01-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    