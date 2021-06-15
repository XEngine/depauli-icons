
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
            children.concat([_c('path',{attrs:{"d":"M18 22.5c-1.654 0-3-1.346-3-3H9c0 1.654-1.346 3-3 3s-3-1.346-3-3h-.75A2.252 2.252 0 010 17.25v-3A2.252 2.252 0 012.25 12H4.5v-1.5a.75.75 0 01.281-.586l3.75-3a.75.75 0 11.938 1.171L6 10.86V12h4.5V8.25a.75.75 0 01.75-.75h4.382a2.257 2.257 0 011.934 1.105L19.895 12h.355A3.754 3.754 0 0124 15.75v1.5a2.252 2.252 0 01-2.25 2.25H21c0 1.654-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5S17.173 21 18 21s1.5-.673 1.5-1.5S18.827 18 18 18zM6 18c-.827 0-1.5.673-1.5 1.5S5.173 21 6 21s1.5-.673 1.5-1.5S6.827 18 6 18zm15.75 0a.75.75 0 00.75-.75v-1.5a2.252 2.252 0 00-2.25-2.25h-18a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h1.156c.533-.918 1.527-1.5 2.594-1.5s2.061.582 2.594 1.5h6.812c.533-.918 1.527-1.5 2.594-1.5s2.061.582 2.594 1.5h1.156zm-3.674-6l-1.763-2.57-.032-.051a.75.75 0 00-.65-.379H12v3h6.076zM5.25 6a.75.75 0 01-.75-.75V4.5h-.75c-.414 0-.75.336-.75.75a.75.75 0 01-1.5 0A2.252 2.252 0 013.75 3h.75v-.75a.75.75 0 01.75-.75h4.5c.96 0 1.808.615 2.121 1.5h3.879a.75.75 0 010 1.5h-3.879A2.258 2.258 0 019.75 6h-4.5zm4.5-1.5a.75.75 0 000-1.5H6v1.5h3.75z"}})])
          )
        }
      }
    