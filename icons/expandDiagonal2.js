
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
            children.concat([_c('path',{attrs:{"d":"M.75 23.999a.755.755 0 01-.26-.047l-.022-.008A.756.756 0 010 23.249v-6.75a.75.75 0 011.5 0v4.939l6.97-6.97a.744.744 0 011.06 0 .744.744 0 010 1.06l-6.97 6.97H7.5a.75.75 0 010 1.5H.75zM15 9.749a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l6.97-6.97H16.5a.75.75 0 010-1.5h6.75a.735.735 0 01.293.06.75.75 0 01.4.404l.01.026a.739.739 0 01.047.26v6.75a.75.75 0 01-1.5 0V2.56l-6.97 6.97a.746.746 0 01-.53.219zM15.75 16.499a.743.743 0 01-.53-.22l-7.5-7.5c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l7.5 7.5a.752.752 0 010 1.061.746.746 0 01-.53.219z"}})])
          )
        }
      }
    