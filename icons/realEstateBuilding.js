
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
            children.concat([_c('path',{attrs:{"d":"M2.25 20.25A2.252 2.252 0 010 18V3A2.252 2.252 0 012.25.75h16.5A2.252 2.252 0 0121 3v15a2.252 2.252 0 01-2.25 2.25H2.25zm0-18A.75.75 0 001.5 3v15c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75V3a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M5.25 23.25a.75.75 0 010-1.5h16.5a.75.75 0 00.75-.75V5.8a.75.75 0 011.5 0V21a2.252 2.252 0 01-2.25 2.25H5.25z"}}),_c('path',{attrs:{"d":"M6 16.5A.75.75 0 016 15h.75V6c0-.827.673-1.5 1.5-1.5h4.5c.827 0 1.5.673 1.5 1.5v9H15a.75.75 0 010 1.5H6zm6.75-1.5v-2.25H10.5a.75.75 0 010-1.5h2.25v-1.5H10.5a.75.75 0 010-1.5h2.25V6h-4.5v9h4.5z"}})])
          )
        }
      }
    