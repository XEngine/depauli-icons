
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
            children.concat([_c('path',{attrs:{"d":"M4.5 23.247a3.754 3.754 0 01-3.75-3.75v-15A3.754 3.754 0 014.5.747h15a3.754 3.754 0 013.75 3.75v15a3.754 3.754 0 01-3.75 3.75h-15zm0-21a2.252 2.252 0 00-2.25 2.25v15a2.252 2.252 0 002.25 2.25h15a2.252 2.252 0 002.25-2.25v-15a2.252 2.252 0 00-2.25-2.25h-15z"}}),_c('path',{attrs:{"d":"M9 20.25A2.252 2.252 0 016.75 18v-5.25H5.249a1.501 1.501 0 01-1.056-2.566l6.328-5.874a2.29 2.29 0 011.488-.561c.532 0 1.049.192 1.457.54l6.324 5.881c.3.299.459.679.458 1.08 0 .4-.156.777-.44 1.06a1.49 1.49 0 01-1.06.439H17.25V18A2.252 2.252 0 0115 20.25H9zm-1.5-9a.75.75 0 01.75.75v6c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-6a.75.75 0 01.75-.75h2.248l-6.28-5.841a.72.72 0 00-.459-.161.759.759 0 00-.492.183l-6.27 5.819H7.5z"}})])
          )
        }
      }
    