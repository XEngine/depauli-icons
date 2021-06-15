
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
            children.concat([_c('path',{attrs:{"d":"M9.001 24a.755.755 0 01-.26-.047l-.022-.008a.747.747 0 01-.249-.165l-3-3A.752.752 0 016 19.499c.2 0 .389.078.53.22l1.72 1.72V10.5a.75.75 0 011.5 0v10.939l1.72-1.72a.744.744 0 011.06 0 .752.752 0 010 1.061l-3 3a.763.763 0 01-.246.164l-.026.01a.742.742 0 01-.257.046zM15.001 14.25a.75.75 0 01-.75-.75V2.561l-1.72 1.72a.744.744 0 01-1.06 0c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l3-3a.75.75 0 01.245-.163l.024-.009a.708.708 0 01.522-.001l.032.012a.75.75 0 01.238.16l3 3c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0l-1.72-1.72V13.5a.752.752 0 01-.751.75z"}})])
          )
        }
      }
    