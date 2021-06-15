
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
            children.concat([_c('path',{attrs:{"d":"M.75 23.998a.755.755 0 01-.26-.047l-.022-.008A.756.756 0 010 23.248v-6.75a.75.75 0 011.5 0v4.939l7.72-7.72a.744.744 0 011.06 0 .744.744 0 010 1.06l-7.72 7.72H7.5a.75.75 0 010 1.5H.75zM14.25 10.498a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l7.72-7.72H16.5a.75.75 0 010-1.5h6.75a.735.735 0 01.293.06.75.75 0 01.4.404l.01.026a.739.739 0 01.047.26v6.75a.75.75 0 01-1.5 0V2.559l-7.72 7.72a.746.746 0 01-.53.219z"}})])
          )
        }
      }
    