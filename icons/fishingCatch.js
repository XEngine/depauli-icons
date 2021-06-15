
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
            children.concat([_c('path',{attrs:{"d":"M5.254 1.5a.75.75 0 010-1.5h16.5a.75.75 0 010 1.5h-16.5zM5.254 4.5a.75.75 0 010-1.5h12a.75.75 0 010 1.5h-12zM19.447 24a.75.75 0 01-.505-.195l-1.949-1.774a9.845 9.845 0 01-2.087.222c-2.689 0-5.616-1.065-8.703-3.166l-4.366 1.676c-.165.055-.317.08-.468.08a1.369 1.369 0 01-1.18-2.046l1.528-2.408-1.529-2.412c-.013-.021-.026-.042-.037-.065a1.367 1.367 0 011.655-1.911l4.398 1.69c1.416-.963 2.812-1.715 4.16-2.242l-1.166-1.17a.749.749 0 111.061-1.059l1.699 1.704c.984-.26 1.948-.394 2.869-.4L13.59 8.665c-.111-.167-.15-.367-.111-.563a.745.745 0 01.736-.602.75.75 0 01.625.334l1.906 2.867c2.535.484 4.832 1.985 6.829 4.461.575.723.576 1.73.003 2.45a15.272 15.272 0 01-1.997 2.071l-1.431 3.829a.748.748 0 01-.703.488zm-2.243-3.541a.75.75 0 01.505.195l1.424 1.295 1.112-2.974a.752.752 0 01.222-.313 13.71 13.71 0 001.938-1.983.465.465 0 000-.579c-2.176-2.699-4.705-4.068-7.514-4.068-2.466 0-5.209 1.048-8.155 3.115a.747.747 0 01-.698.087l-4.332-1.665 1.533 2.42a.751.751 0 010 .803l-1.533 2.417 4.331-1.663a.754.754 0 01.7.086c2.952 2.072 5.701 3.122 8.173 3.122.722 0 1.429-.09 2.104-.269a.67.67 0 01.19-.026z"}}),_c('path',{attrs:{"d":"M17.748 16.188c-.3 0-.583-.116-.794-.328l-.001-.001c-.212-.212-.329-.495-.329-.795s.117-.583.329-.795a.358.358 0 01.041-.035 1.125 1.125 0 011.549.034l.01.01c.43.439.428 1.146-.008 1.582a.415.415 0 01-.044.038 1.12 1.12 0 01-.753.29z"}})])
          )
        }
      }
    