
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
            children.concat([_c('path',{attrs:{"d":"M19.5 21.286a4.505 4.505 0 01-4.5-4.5 4.51 4.51 0 012-3.737l-1.249-2.782-6.79 1.842-1.197 1.59A4.501 4.501 0 019 16.786c0 2.481-2.019 4.5-4.5 4.5S0 19.267 0 16.786s2.019-4.5 4.5-4.5c.719 0 1.427.175 2.067.509l1.054-1.4-2.057-3.609H3.75a.75.75 0 010-1.5H9a.75.75 0 010 1.5H7.291l1.59 2.79 6.249-1.695-1.3-2.897a1.502 1.502 0 01.932-2.05l2.987-.901a.748.748 0 01.935.501.745.745 0 01-.502.935l-2.984.9 3.171 7.064a4.446 4.446 0 011.131-.148c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.501-4.5 4.501zm-1.871-6.838a3.013 3.013 0 00-1.129 2.338c0 1.654 1.346 3 3 3s3-1.346 3-3a3.004 3.004 0 00-3.505-2.957l1.189 2.65a.747.747 0 01-.377.992.75.75 0 01-.992-.377l-1.186-2.646zM4.5 13.786c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3c0-.688-.23-1.337-.656-1.866l-1.745 2.317a.755.755 0 01-.599.299.747.747 0 01-.599-1.202l1.745-2.318a2.987 2.987 0 00-1.146-.23z"}})])
          )
        }
      }
    