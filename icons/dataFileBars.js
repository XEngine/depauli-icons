
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
            children.concat([_c('path',{attrs:{"d":"M5.955 19.5a.75.75 0 01-.75-.75V7.5a.75.75 0 011.5 0V18h1.5v-7.5c0-.827.673-1.5 1.5-1.5h1.5c.827 0 1.5.673 1.5 1.5V18h1.5v-4.5c0-.827.673-1.5 1.5-1.5h1.5c.827 0 1.5.673 1.5 1.5V18h.75a.75.75 0 010 1.5h-13.5zm11.25-1.5v-4.5h-1.5V18h1.5zm-6 0v-7.5h-1.5V18h1.5z"}}),_c('path',{attrs:{"d":"M2.955 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 012.955 0h15c.59.001 1.147.228 1.568.639l2.996 2.879a2.27 2.27 0 01.684 1.613l.002 16.619a2.252 2.252 0 01-2.25 2.25h-18zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h18a.75.75 0 00.75-.75l-.002-16.618c0-.2-.083-.396-.227-.536L18.48 1.717a.75.75 0 00-.526-.217H2.955z"}})])
          )
        }
      }
    