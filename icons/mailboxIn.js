
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
            children.concat([_c('path',{attrs:{"d":"M12.75 24a.75.75 0 01-.75-.75V19.5H1.5C.673 19.5 0 18.827 0 18v-6.75A3.754 3.754 0 013.75 7.5h6.75V.75a.75.75 0 01.75-.75h5.25c1.654 0 3 1.346 3 3s-1.346 3-3 3H12v1.5h8.25A3.754 3.754 0 0124 11.25V18c0 .827-.673 1.5-1.5 1.5h-9v3.75a.75.75 0 01-.75.75zm9.75-6v-6.75A2.252 2.252 0 0020.25 9H12v2.25a.75.75 0 01-1.5 0V9H6.744a3.656 3.656 0 01.21.31l.016.026a3.245 3.245 0 01.185.352 3.847 3.847 0 01.216.602l.009.035.029.115c.019.089.034.178.047.267l.006.037.014.096c.016.144.024.279.024.41V18h15zM3.75 9a2.252 2.252 0 00-2.25 2.25V18H6v-6.75A2.252 2.252 0 003.75 9zM16.5 4.5c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5H12v3h4.5z"}})])
          )
        }
      }
    