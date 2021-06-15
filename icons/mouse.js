
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
            children.concat([_c('path',{attrs:{"d":"M6.75 24A6.758 6.758 0 010 17.25v-6a6.75 6.75 0 016.053-6.714C6.405 1.968 8.628 0 11.25 0a5.256 5.256 0 015.25 5.25V7.5c0 1.654 1.346 3 3 3s3-1.346 3-3V.75a.75.75 0 011.5 0V7.5c0 2.481-2.019 4.5-4.5 4.5S15 9.981 15 7.5V5.25a3.754 3.754 0 00-3.75-3.75c-1.8 0-3.35 1.313-3.682 3.051A6.76 6.76 0 0113.5 11.25v6A6.758 6.758 0 016.75 24zM1.5 17.25c0 2.895 2.355 5.25 5.25 5.25S12 20.145 12 17.25V13.5H1.5v3.75zM12 12v-.75a5.262 5.262 0 00-4.5-5.195V12H12zm-6 0V6.055a5.262 5.262 0 00-4.5 5.195V12H6z"}})])
          )
        }
      }
    