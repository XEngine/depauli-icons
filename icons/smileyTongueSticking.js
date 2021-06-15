
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M14.25 20.25A2.252 2.252 0 0112 18v-1.5H6.75a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5h-.75V18a2.252 2.252 0 01-2.25 2.25zM13.5 18a.75.75 0 001.5 0v-1.5h-1.5V18zM6.75 8.25a.75.75 0 010-1.5H9a.75.75 0 010 1.5H6.75zM6.75 11.25a.75.75 0 010-1.5H9a.75.75 0 010 1.5H6.75zM15 8.25a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5H15zM15 11.25a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5H15z"}})])
          )
        }
      }
    