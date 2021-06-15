
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
            children.concat([_c('path',{attrs:{"d":"M18.75 21a2.252 2.252 0 01-2.25-2.25V12H2.25A2.252 2.252 0 010 9.75v-4.5A2.252 2.252 0 012.25 3h21a.717.717 0 01.108.009.8.8 0 01.324.129l.03.02c.025.02.039.034.053.048a.666.666 0 01.086.096l.039.058a.695.695 0 01.099.27.795.795 0 01.008.078c.003.018.003.025.003.042v15A2.252 2.252 0 0121.75 21h-3zM18 18.75c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V5.888L18 11.513v7.237zm-1.11-8.25l4.8-6h-5.94V6a.75.75 0 01-1.5 0V4.5h-3V6a.75.75 0 01-1.5 0V4.5h-3V6a.75.75 0 01-1.5 0V4.5h-3a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75H3V9a.75.75 0 011.5 0v1.5h3V9A.75.75 0 019 9v1.5h3V9a.75.75 0 011.5 0v1.5h3.39z"}})])
          )
        }
      }
    