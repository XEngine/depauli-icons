
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
            children.concat([_c('path',{attrs:{"d":"M2.994 24a3.003 3.003 0 01-2.999-3V3.75A3.754 3.754 0 013.745 0h14.249c.828 0 1.501.673 1.501 1.5V9a.75.75 0 01-1.5 0V1.5H3.745a2.252 2.252 0 00-2.25 2.25v14.651A2.982 2.982 0 012.994 18h6a.75.75 0 010 1.5h-6a1.501 1.501 0 000 3h5.249a.75.75 0 010 1.5H2.994z"}}),_c('path',{attrs:{"d":"M11.244 24a.743.743 0 01-.53-.22.745.745 0 01-.205-.677l.75-3.75a.748.748 0 01.205-.384l7.63-7.63a2.844 2.844 0 012.026-.839c.763 0 1.48.296 2.02.832a2.875 2.875 0 01.014 4.067l-7.629 7.63a.744.744 0 01-.384.205l-3.749.75a.684.684 0 01-.148.016zm.956-1.706l2.424-.485 7.468-7.469a1.368 1.368 0 000-1.932l-.021-.022A1.34 1.34 0 0021.12 12l-.001-.375V12c-.364 0-.707.142-.964.4l-7.47 7.47-.485 2.424z"}})])
          )
        }
      }
    