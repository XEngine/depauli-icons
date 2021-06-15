
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
            children.concat([_c('path',{attrs:{"d":"M12.75 16.5a.752.752 0 01-.53-1.281L21.439 6H18.75a.75.75 0 010-1.5h4.5a.735.735 0 01.293.06.75.75 0 01.4.404l.01.026a.739.739 0 01.047.26v4.5a.75.75 0 01-1.5 0V7.061l-9.22 9.22a.746.746 0 01-.53.219zM.75 19.5a.755.755 0 01-.26-.047l-.022-.008A.756.756 0 010 18.75v-4.5a.75.75 0 011.5 0v2.689l9.22-9.22a.744.744 0 011.06 0 .747.747 0 010 1.061L2.561 18H5.25a.75.75 0 010 1.5H.75z"}})])
          )
        }
      }
    