
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
            children.concat([_c('path',{attrs:{"d":"M1.488 4.504a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM1.488 21.004a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM5.988 16.504a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75h1.5a2.252 2.252 0 012.25 2.25v.75c0 .562-.205 1.089-.574 1.498.369.409.574.936.574 1.498v.75a2.252 2.252 0 01-2.25 2.25H6.05c-.021.002-.041.004-.062.004zM7.488 15a.75.75 0 00.75-.75v-.75a.754.754 0 00-.717-.747l-.033.001h-.75V15h.75zm0-3.75l.041.002a.75.75 0 00.709-.748v-.75a.75.75 0 00-.75-.75h-.75v2.246h.75zM11.988 16.504a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75zM17.988 16.504a.744.744 0 01-.696-.472l-1.553-3.884v3.606a.75.75 0 01-1.5 0v-7.5a.75.75 0 011.447-.277l1.553 3.884V8.254a.75.75 0 011.5 0v7.5a.75.75 0 01-.751.75z"}})])
          )
        }
      }
    