
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
            children.concat([_c('path',{attrs:{"d":"M12 22.5a.75.75 0 01-.75-.75V15h-9.5C.785 15 0 14.215 0 13.25v-10C0 2.285.785 1.5 1.75 1.5h20.5c.965 0 1.75.785 1.75 1.75v10c0 .965-.785 1.75-1.75 1.75h-9.5v6.75a.75.75 0 01-.75.75zM1.75 3a.25.25 0 00-.25.25v10c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25v-10a.25.25 0 00-.25-.25H1.75z"}}),_c('path',{attrs:{"d":"M7.5 11.25a.743.743 0 01-.53-.22L4.72 8.78a.74.74 0 01-.163-.245.76.76 0 01-.057-.285c0-.089.016-.176.048-.261l.007-.021a.74.74 0 01.166-.249L6.97 5.47c.141-.142.33-.22.53-.22s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53l-.969.97H19.5a.75.75 0 010 1.5H7.061l.97.97c.142.141.22.33.22.53s-.078.389-.22.53a.747.747 0 01-.531.22z"}})])
          )
        }
      }
    