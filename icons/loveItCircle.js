
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
            children.concat([_c('path',{attrs:{"d":"M12 18a.751.751 0 01-.541-.231l-4.474-4.668a3.386 3.386 0 01-.63-3.91 3.383 3.383 0 013.044-1.878 3.409 3.409 0 012.397.994l.203.202.202-.202a3.373 3.373 0 012.402-.993c.909 0 1.762.353 2.403.994A3.395 3.395 0 0117 13.112l-4.459 4.656A.747.747 0 0112 18zM9.398 8.813a1.894 1.894 0 00-1.342 3.237L12 16.166l3.93-4.103a1.907 1.907 0 00.37-2.203 1.886 1.886 0 00-1.697-1.046c-.508 0-.984.197-1.342.554l-.731.731a.744.744 0 01-1.059.001l-.734-.73a1.896 1.896 0 00-1.339-.557z"}}),_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}})])
          )
        }
      }
    