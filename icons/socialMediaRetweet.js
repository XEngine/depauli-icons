
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5.37 20h10.38a.75.75 0 00.55-1.26l-3-3.25a.75.75 0 00-.55-.24H7.5v-4.5h1.25a.75.75 0 00.57-1.23l-4-4.75a.77.77 0 00-1.15 0l-4 4.75a.75.75 0 00.57 1.23H2V17a3.36 3.36 0 003.37 3zM4.75 6.41l2.39 2.84h-.39A.75.75 0 006 10v6a.75.75 0 00.75.75h5.68L14 18.5H5.37c-.85 0-1.87-.69-1.87-1.55V10a.75.75 0 00-.75-.75h-.39zM19.25 19.5a.75.75 0 00.57-.27l4-4.75a.75.75 0 00-.57-1.23H22v-6A3.54 3.54 0 0018.63 4H8.25a.75.75 0 00-.55 1.26l3 3.25a.75.75 0 00.55.24h5.25v4.5h-1.25a.75.75 0 00-.57 1.23l4 4.75a.75.75 0 00.57.27zm-2-12.25h-5.68L10 5.5h8.67a2 2 0 011.83 1.75V14a.75.75 0 00.75.75h.39l-2.39 2.84-2.39-2.84h.39A.75.75 0 0018 14V8a.75.75 0 00-.75-.75z"}})])
          )
        }
      }
    