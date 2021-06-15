
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
            children.concat([_c('path',{attrs:{"d":"M.75 23.25a.75.75 0 010-1.5H4.5v-9H.75a.75.75 0 010-1.5H4.5v-9H.75a.75.75 0 010-1.5H16.5a.75.75 0 010 1.5H12v5.64a9.346 9.346 0 018.293-4.139A.752.752 0 0121 4.5v3.848a3.016 3.016 0 012.25 2.902c0 1.654-1.346 3-3 3s-3-1.346-3-3c0-1.37.947-2.564 2.25-2.902V5.239a7.797 7.797 0 00-7.354 6.011H15a.75.75 0 010 1.5h-3v9h11.25a.75.75 0 010 1.5H.75zm9.75-1.5V18H6v3.75h4.5zm0-5.25v-3.75H6v3.75h4.5zm9.75-6.75c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm-9.75 1.5V7.5H6v3.75h4.5zm0-5.25V2.25H6V6h4.5z"}})])
          )
        }
      }
    