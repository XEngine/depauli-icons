
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
            children.concat([_c('path',{attrs:{"d":"M2.257 21.003a2.252 2.252 0 01-2.25-2.25v-16.5a2.252 2.252 0 012.25-2.25h18a2.252 2.252 0 012.25 2.25V10.5a.75.75 0 01-1.5 0V6.003h-19.5v12.75c0 .414.336.75.75.75h6.751a.75.75 0 010 1.5H2.257zm18.75-16.5v-2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.25h19.5zM12.757 24.003a.75.75 0 01-.75-.75 6.758 6.758 0 016.75-6.75h2.69l-1.72-1.72a.744.744 0 010-1.06.749.749 0 011.06 0l3 3a.726.726 0 01.218.509v.045a.726.726 0 01-.059.271.729.729 0 01-.159.235l-3 3a.744.744 0 01-1.06 0 .749.749 0 010-1.06l1.72-1.72h-2.69a5.256 5.256 0 00-5.25 5.25.75.75 0 01-.75.75z"}})])
          )
        }
      }
    