
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
            children.concat([_c('path',{attrs:{"d":"M9.75 24a.755.755 0 01-.26-.047l-.022-.008a.732.732 0 01-.249-.165l-2.999-3c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.744.744 0 011.06 0L9 21.439V14.25H4.663A4.703 4.703 0 010 9.548V.75a.75.75 0 011.5 0v8.8a3.198 3.198 0 003.168 3.2h16.771l-1.72-1.72c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l3 3a.74.74 0 01.163.245l.01.026c.032.081.048.17.048.259a.767.767 0 01-.046.258l-.006.016a.748.748 0 01-.167.256l-3 3a.744.744 0 01-1.06 0 .75.75 0 01-.001-1.06l1.72-1.72H10.5v7.189l1.72-1.72a.744.744 0 011.06 0 .749.749 0 010 1.06l-3 3a.763.763 0 01-.246.164l-.027.01A.717.717 0 019.75 24z"}})])
          )
        }
      }
    