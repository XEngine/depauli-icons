
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
            children.concat([_c('path',{attrs:{"d":"M9 24a2.252 2.252 0 01-2.25-2.25V12a.75.75 0 01.513-.712l9-3a.759.759 0 01.675.103.75.75 0 01.312.609v12.75A2.252 2.252 0 0115 24H9zm-.75-2.25c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-2.709l-7.5 2.5v.209zm0-1.791l7.5-2.5V14.54l-7.5 2.5v2.919zm0-4.5l7.5-2.5V10.04l-7.5 2.5v2.919zM12 9a3.754 3.754 0 01-3.75-3.75c0-1.884 2.694-4.533 3.234-5.044a.75.75 0 011.032-.001c.54.512 3.234 3.162 3.234 5.045A3.754 3.754 0 0112 9zm0-7.188C10.841 3.024 9.75 4.49 9.75 5.25A2.252 2.252 0 0012 7.5a2.252 2.252 0 002.25-2.25c0-.76-1.091-2.226-2.25-3.438z"}})])
          )
        }
      }
    