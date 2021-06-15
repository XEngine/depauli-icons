
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
            children.concat([_c('path',{attrs:{"d":"M12 19.498a.755.755 0 01-.26-.047l-.022-.008a.732.732 0 01-.249-.165l-3.749-3.75a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l2.47 2.47V.748a.75.75 0 011.5 0v16.189l2.47-2.47a.744.744 0 011.06 0 .752.752 0 010 1.061l-3.75 3.75a.763.763 0 01-.246.164l-.026.01a.747.747 0 01-.258.046zM.75 23.998a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75z"}})])
          )
        }
      }
    