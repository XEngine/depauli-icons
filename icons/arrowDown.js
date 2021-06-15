
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
            children.concat([_c('path',{attrs:{"d":"M12 24a.755.755 0 01-.26-.047l-.022-.008a.732.732 0 01-.249-.165L.97 13.28a.744.744 0 010-1.06c.141-.142.33-.22.53-.22s.389.078.53.22l9.22 9.22V.75a.75.75 0 011.5 0v20.689l9.22-9.22a.746.746 0 011.06.001.744.744 0 010 1.06l-10.5 10.5a.763.763 0 01-.246.164l-.027.01A.746.746 0 0112 24z"}})])
          )
        }
      }
    