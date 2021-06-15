
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M5 15.75c-.689 0-1.25-.561-1.25-1.25V11c0-1.103.897-2 2-2H7c1.103 0 2 .897 2 2v3.5c0 .689-.561 1.25-1.25 1.25H5zm2.5-1.5V11a.5.5 0 00-.5-.5H5.75a.5.5 0 00-.5.5v3.25H7.5zM11 15.75c-.689 0-1.25-.561-1.25-1.25V11c0-1.103.897-2 2-2H13c1.103 0 2 .897 2 2v3.5c0 .689-.561 1.25-1.25 1.25H11zm2.5-1.5V11a.5.5 0 00-.5-.5h-1.25a.5.5 0 00-.5.5v3.25h2.25zM17 15.75c-.689 0-1.25-.561-1.25-1.25V11c0-1.103.897-2 2-2H19c1.103 0 2 .897 2 2v3.5c0 .689-.561 1.25-1.25 1.25H17zm2.5-1.5V11a.5.5 0 00-.5-.5h-1.25a.5.5 0 00-.5.5v3.25h2.25z"}})])
          )
        }
      }
    