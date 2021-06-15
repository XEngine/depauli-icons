
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
            children.concat([_c('path',{attrs:{"d":"M1.75 18.75C.785 18.75 0 17.965 0 17V7c0-.965.785-1.75 1.75-1.75h20.5c.965 0 1.75.785 1.75 1.75v10c0 .965-.785 1.75-1.75 1.75H1.75zm20.5-1.5a.25.25 0 00.25-.25V7a.25.25 0 00-.25-.25h-.91L16.747 12l4.594 5.25h.909zm-2.903 0l-4.162-4.756a.751.751 0 010-.988l4.162-4.756H14.59L9.997 12l4.594 5.25h4.756zm-6.75 0l-4.162-4.756a.754.754 0 010-.988l4.162-4.756H7.84L3.247 12l4.594 5.25h4.756zM1.75 6.75A.25.25 0 001.5 7v10c0 .138.112.25.25.25h4.097l-4.162-4.756a.754.754 0 010-.988L5.847 6.75H1.75z"}})])
          )
        }
      }
    