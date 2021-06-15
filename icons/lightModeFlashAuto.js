
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
            children.concat([_c('path',{attrs:{"d":"M11.989 24.007c-2.342 0-4.622-.69-6.595-1.996a11.91 11.91 0 01-5.129-7.608C-.372 11.27.252 8.072 2.022 5.4S6.492.905 9.625.268c.788-.16 1.593-.242 2.391-.242 5.674 0 10.613 4.038 11.744 9.602.322 1.584.322 3.19 0 4.775a.753.753 0 01-.736.601.75.75 0 01-.734-.899 10.454 10.454 0 000-4.177c-.989-4.868-5.31-8.401-10.275-8.401-.698 0-1.402.071-2.092.211C4.257 2.889.583 8.437 1.735 14.104a10.424 10.424 0 004.487 6.656 10.42 10.42 0 007.879 1.534.753.753 0 01.884.586.748.748 0 01-.586.884 12.17 12.17 0 01-2.41.243z"}}),_c('path',{attrs:{"d":"M9.493 21.003a.75.75 0 01-.746-.825l.667-6.676H8.251a1.503 1.503 0 01-1.436-1.932l1.8-5.999a1.509 1.509 0 011.436-1.068h4.979a1.502 1.502 0 011.342 2.17l-1.165 2.33h1.786a.75.75 0 01.611 1.185l-7.5 10.5a.753.753 0 01-.611.315zm-1.242-9h1.992a.753.753 0 01.747.824l-.47 4.698 5.016-7.022h-1.543a.745.745 0 01-.638-.356.748.748 0 01-.033-.73l1.708-3.415h-4.978l-1.801 6.001zM20.251 22.503a.75.75 0 01-.75-.75v-2.25h-1.5v2.25a.75.75 0 01-1.5 0v-6c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v6a.75.75 0 01-.75.75zm-.75-4.5v-2.25a.75.75 0 00-1.5 0v2.25h1.5z"}})])
          )
        }
      }
    