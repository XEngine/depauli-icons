
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
            children.concat([_c('path',{attrs:{"d":"M18.748 19c-.96 0-1.808-.615-2.121-1.5H8.87A2.26 2.26 0 016.748 19a2.254 2.254 0 01-2.136-1.544c-2.609-.317-4.614-2.553-4.614-5.206A2.252 2.252 0 012.248 10h3V8.5a.75.75 0 011.5 0V10h5.94l-2.025-2.531a.75.75 0 011.171-.937l2.853 3.567 7.905 2.353a.77.77 0 01.203.095 2.708 2.708 0 01.75 3.749A2.697 2.697 0 0121.3 17.5h-.43a2.26 2.26 0 01-2.122 1.5zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zm-12 0a.75.75 0 100 1.5.75.75 0 000-1.5zm14.55 0a1.2 1.2 0 00.998-.536 1.214 1.214 0 00-.254-1.611L14.139 11.5H2.248a.75.75 0 00-.75.75 3.77 3.77 0 003.149 3.698A2.263 2.263 0 016.748 14.5c.96 0 1.808.615 2.121 1.5h7.757c.314-.885 1.162-1.5 2.121-1.5s1.808.615 2.121 1.5h.43z"}})])
          )
        }
      }
    