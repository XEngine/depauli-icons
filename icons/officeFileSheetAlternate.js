
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
            children.concat([_c('path',{attrs:{"d":"M2.998 23.999A3.003 3.003 0 01-.001 21V3A3.004 3.004 0 013-.001h14.378c.602 0 1.167.234 1.592.66l4.37 4.371c.425.425.659.99.659 1.592V21A3.003 3.003 0 0121 23.999H2.998zM3 1.499c-.828 0-1.501.673-1.501 1.501v18c0 .826.673 1.499 1.5 1.499H21c.826 0 1.499-.673 1.499-1.5v-13.5h-3.75a2.252 2.252 0 01-2.25-2.25v-3.75H3zm14.999 3.75c0 .414.336.75.75.75h3.439L17.999 1.81v3.439z"}}),_c('path',{attrs:{"d":"M5.249 20.249c-.827 0-1.5-.673-1.5-1.5V10.5l.001-.03V8.249c0-.827.673-1.5 1.5-1.5h8.25a.75.75 0 010 1.5H5.25V9.75h3.723l.026-.001.03.001h9.72c.827 0 1.5.673 1.5 1.5l.001 7.499c0 .827-.673 1.5-1.5 1.5H5.249zm13.501-1.5v-3h-9v3h9zm-13.501 0h3v-3h-3v3zm13.501-4.5V11.25h-9v2.999h9zm-10.501 0V11.25h-3v2.999h3z"}})])
          )
        }
      }
    