
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M17.133 15.886c-1.565 0-3.908-1.825-5.065-2.817-1.157.992-3.5 2.817-5.068 2.817a3.795 3.795 0 01-2.7-1.117 3.794 3.794 0 01-1.119-2.7A3.822 3.822 0 016.997 8.25c1.571 0 3.914 1.826 5.071 2.818 1.157-.992 3.5-2.818 5.065-2.818 1.022 0 1.981.398 2.702 1.119.721.722 1.117 1.68 1.117 2.7s-.398 1.979-1.119 2.699a3.794 3.794 0 01-2.698 1.117h-.002zm-3.924-3.818c1.428 1.195 3.114 2.318 3.924 2.318.62 0 1.202-.241 1.639-.678.438-.438.679-1.02.68-1.639 0-.619-.241-1.202-.678-1.64a2.303 2.303 0 00-1.639-.679c-.811 0-2.498 1.123-3.926 2.318zM7 9.75c-.621 0-1.203.242-1.641.679a2.32 2.32 0 001.64 3.957c.814 0 2.501-1.123 3.928-2.318C9.5 10.873 7.813 9.75 7 9.75z"}})])
          )
        }
      }
    