
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
            children.concat([_c('path',{attrs:{"d":"M23.25 24.001a.743.743 0 01-.53-.22l-5.349-5.349a10.458 10.458 0 01-6.871 2.569c-5.79 0-10.5-4.71-10.5-10.5S4.71.001 10.5.001 21 4.711 21 10.501c0 2.533-.91 4.959-2.569 6.871l5.349 5.349a.744.744 0 010 1.06.749.749 0 01-.53.22zM10.5 1.501c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"}}),_c('path',{attrs:{"d":"M10.5 16.501a.75.75 0 01-.75-.75v-2.576l-2.979-1.787-.605.404a.75.75 0 00-.208 1.04l.668 1a.747.747 0 01-.207 1.04.752.752 0 01-1.04-.207l-.668-1a2.254 2.254 0 01.624-3.121L6 10.099V6.85a2.26 2.26 0 011.092-1.929l2.25-1.35a2.253 2.253 0 012.316 0l2.25 1.35A2.26 2.26 0 0115 6.85v3.249l.667.445a2.253 2.253 0 01.624 3.12l-.668 1a.748.748 0 01-1.04.207.748.748 0 01-.207-1.04l.668-1a.752.752 0 00-.208-1.04l-.605-.404-2.979 1.787v2.576a.753.753 0 01-.752.751zm0-4.626l3-1.8V6.85a.753.753 0 00-.364-.643l-2.25-1.35a.754.754 0 00-.772 0l-2.25 1.35a.755.755 0 00-.364.643v3.225l3 1.8z"}}),_c('path',{attrs:{"d":"M9.75 9.001a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    