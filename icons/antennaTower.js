
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75V7.992A1.26 1.26 0 011.25 6.75h1V5.144l.002-.057a1.456 1.456 0 011.534-1.336H4.5v-3A.75.75 0 116 .75v3h.738a1.456 1.456 0 011.51 1.336l.002.058V6.75h1c.678 0 1.239.552 1.25 1.23V22.5H12V15c0-.827.673-1.5 1.5-1.5h3.75c.827 0 1.5.673 1.5 1.5v7.5H21a.75.75 0 010 1.5H.75zm16.5-1.5V15H13.5v7.5h3.75zM9 22.5V8.25H1.5V22.5H9zM6.75 6.75v-1.5h-3v1.5h3z"}}),_c('path',{attrs:{"d":"M3.75 11.25a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM3.75 14.25a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM3.75 17.25a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM3.75 20.25a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM18.735 12a.755.755 0 01-.75-.733 5.201 5.201 0 00-5.096-5.096.75.75 0 01.014-1.5 6.702 6.702 0 016.582 6.563.75.75 0 01-.734.766h-.016zM23.235 10.802a.75.75 0 01-.749-.715 8.954 8.954 0 00-8.613-8.573.75.75 0 01.029-1.5l.038.001c5.47.23 9.789 4.53 10.044 10.002.01.2-.06.392-.195.54a.743.743 0 01-.519.244l-.035.001z"}})])
          )
        }
      }
    