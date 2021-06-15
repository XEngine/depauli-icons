
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M10.5 19.5c-.827 0-1.5-.673-1.5-1.5v-4.5H7.56c-.4 0-.777-.156-1.06-.44A1.489 1.489 0 016.06 12c0-.339.117-.672.329-.938l4.438-5.548a1.494 1.494 0 011.175-.563 1.503 1.503 0 011.168.562l4.439 5.55a1.502 1.502 0 01-1.17 2.438H15V18c0 .827-.673 1.5-1.5 1.5h-3zM12 6.451L7.561 12H9.75a.75.75 0 01.75.75V18h3v-5.25a.75.75 0 01.75-.75h2.19L12 6.451v-.375.375z"}})])
          )
        }
      }
    