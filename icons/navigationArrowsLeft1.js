
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
            children.concat([_c('path',{attrs:{"d":"M21.751 23.993c-.533 0-1.051-.19-1.458-.537L9.04 13.708a2.253 2.253 0 01.004-3.426L20.288.533a2.252 2.252 0 013.714 1.711v19.5c0 .601-.234 1.166-.659 1.591-.425.425-.99.659-1.591.659l-.001-.001zM21.75 1.492a.737.737 0 00-.484.179L10.021 11.42a.752.752 0 00-.006 1.148l11.256 9.75a.739.739 0 00.48.174.745.745 0 00.531-.22.745.745 0 00.22-.531v-19.5a.75.75 0 00-.69-.748l-.062-.001z"}}),_c('path',{attrs:{"d":"M13.5 24c-.533 0-1.051-.19-1.457-.536L.788 13.706a2.232 2.232 0 01-.78-1.528 2.235 2.235 0 01.786-1.896L12.038.533A2.26 2.26 0 0113.5-.006a2.245 2.245 0 012.25 2.254V3a.75.75 0 01-1.5 0v-.753a.748.748 0 00-1.235-.576L1.771 11.42a.752.752 0 00-.006 1.148l11.255 9.758a.74.74 0 00.48.174.745.745 0 00.531-.22.745.745 0 00.22-.531V21a.75.75 0 011.5 0v.75c0 .601-.234 1.166-.659 1.591a2.24 2.24 0 01-1.591.659H13.5z"}})])
          )
        }
      }
    