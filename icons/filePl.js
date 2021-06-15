
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
            children.concat([_c('path',{attrs:{"d":"M2.249 24.003a2.252 2.252 0 01-2.25-2.25v-19.5a2.252 2.252 0 012.25-2.25h10.629a2.239 2.239 0 011.591.66l5.872 5.871c.425.425.659.99.659 1.592v4.627a.75.75 0 01-1.5 0v-3.75h-5.25A2.252 2.252 0 0112 6.753v-5.25H2.25a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h9a.75.75 0 010 1.5H2.249zm11.25-17.25c0 .414.336.75.75.75h4.939l-5.689-5.688v4.938z"}}),_c('path',{attrs:{"d":"M14.249 24.003a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75H15c1.654 0 3 1.346 3 3s-1.346 3-3 3h-.001v2.25a.75.75 0 01-.75.75zm.751-4.5c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5h-.001l.001 3zM21.749 24.003a2.252 2.252 0 01-2.25-2.25v-6a.75.75 0 011.5 0v6c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    