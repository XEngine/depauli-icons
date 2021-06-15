
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
            children.concat([_c('path',{attrs:{"d":"M21 24c-1.654 0-3-1.346-3-3v-6.75c0-.827.673-1.5 1.5-1.5h.75V8.114c0-3.647-2.692-6.614-6-6.614l-.155.002c1.968 1.512 3.155 3.958 3.155 6.612.125 2.977-2.215 5.522-5.216 5.658l-.034.001-.033-.001a5.478 5.478 0 01-5.216-5.689c0-2.632 1.186-5.07 3.152-6.581A7.805 7.805 0 009.75 1.5c-3.308 0-6 2.967-6 6.614v4.636h.75c.827 0 1.5.673 1.5 1.5V21c0 1.654-1.346 3-3 3s-3-1.346-3-3v-6.75c0-.827.673-1.5 1.5-1.5h.75V8.114C2.25 3.64 5.615 0 9.75 0A6.94 6.94 0 0112 .373 6.94 6.94 0 0114.25 0c4.135 0 7.5 3.64 7.5 8.114v4.636h.75c.827 0 1.5.673 1.5 1.5V21c0 1.654-1.346 3-3 3zm-1.5-3c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5v-3.75h-3V21zm-18 0c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5v-3.75h-3V21zm21-5.25v-1.5h-3v1.5h3zm-18 0v-1.5h-3v1.5h3zM12 1.983C9.75 2.99 8.25 5.433 8.25 8.114c-.09 2.188 1.59 4.042 3.75 4.158a3.976 3.976 0 003.75-4.127c0-2.705-1.501-5.154-3.75-6.162z"}})])
          )
        }
      }
    