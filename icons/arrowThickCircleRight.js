
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M12.002 17.94a1.488 1.488 0 01-1.173-.562 1.505 1.505 0 01-.329-.938V15H6c-.827 0-1.5-.673-1.5-1.5v-3C4.5 9.673 5.173 9 6 9h4.5V7.56c0-.401.156-.778.44-1.061A1.489 1.489 0 0112 6.06c.34 0 .673.117.938.329l5.549 4.439c.313.251.509.609.553 1.007a1.49 1.49 0 01-.554 1.336l-5.549 4.439c-.268.216-.592.33-.935.33zM6 13.5h5.25a.75.75 0 01.75.75v2.19L17.55 12 12 7.561V9.75a.75.75 0 01-.75.75H6v3z"}})])
          )
        }
      }
    