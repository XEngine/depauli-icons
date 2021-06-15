
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
            children.concat([_c('path',{attrs:{"d":"M2.241 24.003a2.252 2.252 0 01-2.25-2.25v-19.5a2.252 2.252 0 012.25-2.25h10.628c.602 0 1.167.235 1.592.66l5.869 5.87c.425.424.66.989.66 1.591l.001.128-.001.026v4.474a.75.75 0 01-1.5 0v-3.75h-5.249a2.252 2.252 0 01-2.25-2.25v-5.25h-9.75a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6zm11.25-17.25c0 .414.336.75.75.75h4.937l-5.687-5.688v4.938z"}}),_c('path',{attrs:{"d":"M11.241 24.003a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75h1.5a2.252 2.252 0 012.25 2.25V18c0 .563-.206 1.091-.575 1.5.37.409.575.937.575 1.5v.75a2.252 2.252 0 01-2.25 2.25h-1.446a.45.45 0 01-.054.003zm1.5-1.503a.75.75 0 00.75-.75V21a.75.75 0 00-.75-.75h-.75v2.25h.75zm0-3.75a.75.75 0 00.75-.75v-.747a.75.75 0 00-.75-.75h-.75v2.247h.75zM17.241 24.004a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75zM23.241 24.004a.744.744 0 01-.696-.472l-1.553-3.884v3.606a.75.75 0 01-1.5 0v-7.5a.75.75 0 011.447-.278l1.553 3.884v-3.606a.75.75 0 011.5 0v7.5a.75.75 0 01-.751.75z"}})])
          )
        }
      }
    