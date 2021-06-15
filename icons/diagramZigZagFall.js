
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
            children.concat([_c('path',{attrs:{"d":"M11.25 24a.755.755 0 01-.26-.047l-.022-.008a.732.732 0 01-.249-.165l-2.999-3a.744.744 0 010-1.06.744.744 0 011.06 0l1.72 1.72V15H6.75a.747.747 0 01-.716-.527.748.748 0 01.289-.84l7.776-5.384H11.25a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v6h4.5c.33 0 .618.212.716.527a.747.747 0 01-.289.84L9.151 13.5h2.099a.75.75 0 01.75.75v7.189l1.72-1.72a.744.744 0 011.06 0 .75.75 0 010 1.061l-3 3a.763.763 0 01-.246.164l-.027.01a.746.746 0 01-.257.046z"}})])
          )
        }
      }
    