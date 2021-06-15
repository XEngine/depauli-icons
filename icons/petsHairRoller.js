
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
            children.concat([_c('path',{attrs:{"d":"M2.635 23.971a2.579 2.579 0 01-1.88-.802 2.597 2.597 0 01.001-3.599l6.028-6.028-.858-.858c-.331-.331-.513-.77-.513-1.237s.182-.907.513-1.238L15.512.624c.33-.33.77-.513 1.237-.513s.907.182 1.238.513l.858.858.256-.256a2.575 2.575 0 011.812-.749h.042a2.587 2.587 0 011.83.78 2.615 2.615 0 010 3.644l-.26.26.858.858c.331.33.513.77.513 1.237s-.182.907-.513 1.238l-9.585 9.585c-.331.331-.77.513-1.237.513a1.74 1.74 0 01-1.238-.513l-.857-.857-6.017 6.017a2.621 2.621 0 01-1.814.732zm-.808-3.352c-.4.418-.398 1.085.011 1.513.209.219.492.339.796.339a1.1 1.1 0 00.76-.303l6.008-6.007-1.558-1.558-6.017 6.016zm10.554-3.601c.047.047.11.073.177.073.067 0 .13-.026.177-.073l9.585-9.585a.245.245 0 00.073-.177.24.24 0 00-.073-.176l-5.396-5.396a.245.245 0 00-.177-.073.245.245 0 00-.177.073l-9.586 9.585a.245.245 0 00-.073.177c0 .068.025.129.073.177l1.365 1.365a.261.261 0 01.024.022l2.619 2.619a.67.67 0 01.024.026l1.365 1.363zM21.462 4.1l.256-.256a1.106 1.106 0 00-.005-1.538 1.092 1.092 0 00-.776-.33h-.032a1.07 1.07 0 00-.75.316l-.251.25L21.462 4.1z"}})])
          )
        }
      }
    