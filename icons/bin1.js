
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
            children.concat([_c('path',{attrs:{"d":"M2.238 24.004a2.252 2.252 0 01-2.25-2.25v-19.5a2.252 2.252 0 012.25-2.25h19.5a2.252 2.252 0 012.25 2.25v19.5a2.252 2.252 0 01-2.25 2.25h-19.5zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-19.5a.75.75 0 00-.75-.75h-19.5z"}}),_c('path',{attrs:{"d":"M5.988 18.754a.75.75 0 01-.75-.75V10.5a.75.75 0 01.75-.75h1.5A2.252 2.252 0 019.738 12v.75c0 .555-.211 1.092-.579 1.502.368.41.579.947.579 1.502v.75a2.252 2.252 0 01-2.25 2.25h-1.5zm1.5-1.5a.75.75 0 00.75-.75v-.75a.75.75 0 00-.75-.75h-.75v2.25h.75zm0-3.754a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75h-.75v2.25h.75zM11.988 18.754a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75zM17.988 18.754a.744.744 0 01-.696-.472l-1.553-3.884v3.605a.75.75 0 01-1.5 0v-7.5a.75.75 0 011.446-.278l1.553 3.884v-3.605a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    