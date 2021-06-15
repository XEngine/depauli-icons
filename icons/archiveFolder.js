
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
            children.concat([_c('path',{attrs:{"d":"M3.75 11.625a.75.75 0 010-1.5h16.5a.75.75 0 010 1.5H3.75zM3.75 7.875a.75.75 0 010-1.5h16.5a.75.75 0 010 1.5H3.75zM3.75 4.125a.75.75 0 010-1.5h16.5a.75.75 0 010 1.5H3.75zM2.25 21.375A2.252 2.252 0 010 19.125v-3.75c0-.827.673-1.5 1.5-1.5H9a.75.75 0 01.75.75 2.252 2.252 0 002.25 2.25 2.252 2.252 0 002.25-2.25.75.75 0 01.75-.75h7.5c.827 0 1.5.673 1.5 1.5v3.75a2.252 2.252 0 01-2.25 2.25H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-3.75h-6.825c-.35 1.732-1.875 3-3.675 3s-3.324-1.268-3.675-3H1.5v3.75z"}})])
          )
        }
      }
    