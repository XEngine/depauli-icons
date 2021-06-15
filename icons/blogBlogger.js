
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
            children.concat([_c('path',{attrs:{"d":"M24 10.46a.74.74 0 000-.16 1.76 1.76 0 00-.81-1.3l-.1-.08a2.9 2.9 0 00-1.7-.33 5.38 5.38 0 01-1.32-.12 2.92 2.92 0 01-.32-1.29v-.17a6.44 6.44 0 00-.6-2.43L19 4.35A8.58 8.58 0 0012.86 0h-5A7.87 7.87 0 000 7.9v8.3A7.86 7.86 0 007.89 24h8.16a7.89 7.89 0 007.86-7.84zm-1.54 5.74a6.39 6.39 0 01-6.36 6.35H7.89a6.36 6.36 0 01-6.35-6.35V7.9a6.36 6.36 0 016.35-6.36h4.88A7.12 7.12 0 0117.67 5l.11.24a5.1 5.1 0 01.46 2v.17a3.39 3.39 0 00.8 2.21 3.64 3.64 0 002.3.51 6.42 6.42 0 01.87.05h.06s.09.08.08.05a1.59 1.59 0 01.08.29z"}}),_c('path',{attrs:{"d":"M7.83 10.17H12a2.39 2.39 0 100-4.77H7.83a2.39 2.39 0 100 4.77zm0-3.27H12a.89.89 0 110 1.77H7.83a.89.89 0 110-1.77zM16.16 13.83H7.83a2.39 2.39 0 000 4.77h8.33a2.39 2.39 0 000-4.77zm0 3.27H7.83a.89.89 0 110-1.77h8.33a.89.89 0 010 1.77z"}})])
          )
        }
      }
    