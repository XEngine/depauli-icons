
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
            children.concat([_c('path',{attrs:{"d":"M3 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 013 0h15.045c.592 0 1.149.227 1.572.639l2.954 2.883c.431.421.679 1.008.679 1.611V21.75A2.252 2.252 0 0121 24H3zM3 1.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V5.133a.754.754 0 00-.227-.537l-2.954-2.883a.746.746 0 00-.523-.213H3z"}}),_c('path',{attrs:{"d":"M14.25 19.5a4.505 4.505 0 01-4.5-4.5h-4.5a.751.751 0 01-.668-1.09L8.74 5.766a.75.75 0 01.655-.409.766.766 0 01.669.386l2.77 4.986A4.505 4.505 0 0118.751 15c0 2.481-2.02 4.5-4.501 4.5zm0-7.5a3.012 3.012 0 00-2.939 2.395A3.004 3.004 0 0014.25 18c1.654 0 3-1.346 3-3s-1.346-3-3-3zm-4.239 1.5c.29-.817.81-1.534 1.499-2.064L9.436 7.702 6.475 13.5h3.536z"}})])
          )
        }
      }
    