
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h.75V18c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v4.5H9v-9c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v9h1.5v-12c0-.828.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v12h.75a.75.75 0 010 1.5H.75zM21 22.5v-12h-3v12h3zm-7.5 0v-9h-3v9h3zm-7.5 0V18H3v4.5h3zM4.182 9.991a.751.751 0 01-.31-1.433L18.291 2.01l-1.487-.558a.75.75 0 01.528-1.405l3.181 1.194a.737.737 0 01.263.168.723.723 0 01.204.363.8.8 0 01.016.106l.003.035a.792.792 0 01-.006.124l-.003.027a.772.772 0 01-.038.143L19.758 5.39a.753.753 0 01-.966.439c-.187-.07-.336-.209-.419-.392s-.09-.386-.019-.574l.558-1.487-14.42 6.547a.737.737 0 01-.31.068z"}})])
          )
        }
      }
    