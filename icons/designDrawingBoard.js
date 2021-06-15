
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
            children.concat([_c('path',{attrs:{"d":"M18 24a.75.75 0 01-.69-.455l-2.055-4.795H12.75v4.5a.75.75 0 01-1.5 0v-4.5H8.745L6.69 23.545a.75.75 0 01-1.38-.59l1.802-4.205H1.5a.75.75 0 010-1.5h.75V7.5A2.252 2.252 0 014.5 5.25h3.75c0-.827.673-1.5 1.5-1.5h1.5v-1.5a.75.75 0 011.5 0v1.5h1.5c.827 0 1.5.673 1.5 1.5h3.75a2.252 2.252 0 012.25 2.25v9.75h.75a.75.75 0 010 1.5h-5.613l1.802 4.205A.751.751 0 0118 24zm2.25-6.75V7.5a.75.75 0 00-.75-.75h-3.879a2.258 2.258 0 01-2.121 1.5h-3c-.96 0-1.808-.615-2.121-1.5H4.5a.75.75 0 00-.75.75v9.75h16.5zM9.75 6c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-.75h-4.5V6z"}})])
          )
        }
      }
    