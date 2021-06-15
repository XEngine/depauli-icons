
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
            children.concat([_c('path',{attrs:{"d":"M20.682 24a.752.752 0 01-.378-.102C17.717 22.384 15.841 17.38 15.841 12l.002-.273H8.134l.002.273c0 5.38-1.874 10.383-4.457 11.897a.752.752 0 01-1.026-.268.75.75 0 01.268-1.026C5.004 21.381 6.636 16.724 6.636 12l-.002-.273H2.273a.75.75 0 010-1.5h4.29c-.34-4.161-1.815-7.759-3.642-8.83A.75.75 0 013.679.103c2.288 1.341 4.032 5.383 4.39 10.124h7.84c.358-4.742 2.104-8.784 4.394-10.124a.755.755 0 011.026.268.75.75 0 01-.268 1.026c-1.83 1.071-3.306 4.668-3.646 8.83h4.291a.75.75 0 010 1.5h-4.362l-.002.273c0 4.725 1.634 9.382 3.72 10.603a.752.752 0 01.269 1.026.758.758 0 01-.649.371z"}})])
          )
        }
      }
    