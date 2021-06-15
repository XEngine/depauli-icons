
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
            children.concat([_c('path',{attrs:{"d":"M12 23.25a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM17.25 23.25a.748.748 0 01-.727-.568l-.75-3a.752.752 0 01.727-.932c.345 0 .645.233.728.568l.75 3a.752.752 0 01-.728.932zM6.75 23.25a.746.746 0 01-.727-.932l.75-3a.749.749 0 111.455.365l-.75 3a.75.75 0 01-.728.567zM18 15.75c-.827 0-1.5-.673-1.5-1.5v-6c0-.827.673-1.5 1.5-1.5h.75v-4.5h-6v4.5h.75c.827 0 1.5.673 1.5 1.5v6c0 .827-.673 1.5-1.5 1.5h-3c-.827 0-1.5-.673-1.5-1.5v-6c0-.827.673-1.5 1.5-1.5h.75v-4.5h-6v4.5H6c.827 0 1.5.673 1.5 1.5v6c0 .827-.673 1.5-1.5 1.5H3c-.827 0-1.5-.673-1.5-1.5v-6c0-.827.673-1.5 1.5-1.5h.75v-4.5H1.5a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-2.25v4.5H21c.827 0 1.5.673 1.5 1.5v6c0 .827-.673 1.5-1.5 1.5h-3zm0-1.5h3v-6h-3v6zm-7.5 0h3v-6h-3v6zm-7.5 0h3v-6H3v6z"}})])
          )
        }
      }
    