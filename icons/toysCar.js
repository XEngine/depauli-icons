
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
            children.concat([_c('path',{attrs:{"d":"M14.25 24c-.96 0-1.808-.615-2.121-1.5H7.371C7.058 23.385 6.21 24 5.25 24s-1.808-.615-2.121-1.5H2.25A2.252 2.252 0 010 20.25v-.75a3.754 3.754 0 013.75-3.75h.792a6.755 6.755 0 016.708-6c3.627 0 6.607 2.891 6.744 6.49a3.752 3.752 0 011.868 2.73l.138.963a2.253 2.253 0 01-2.23 2.567h-1.399A2.258 2.258 0 0114.25 24zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zm-9 0a.75.75 0 100 1.5.75.75 0 000-1.5zm12.52 0a.74.74 0 00.601-.301.748.748 0 00.143-.556l-.137-.963a2.26 2.26 0 00-2.228-1.931H3.75a2.252 2.252 0 00-2.25 2.25v.75a.75.75 0 00.75.751h.879c.314-.885 1.162-1.5 2.121-1.5s1.808.615 2.121 1.5h4.757c.314-.885 1.162-1.5 2.121-1.5s1.808.615 2.121 1.5h1.4zm-1.62-5.25c.098 0 .198.004.299.013a5.248 5.248 0 00-4.448-4.458v4.445h4.149zm-5.65 0v-4.445a5.265 5.265 0 00-4.445 4.445H10.5z"}}),_c('path',{attrs:{"d":"M21.75 19.5a.75.75 0 010-1.5.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75h-6a.75.75 0 00-.75.75v3a.75.75 0 01-1.5 0v-3A2.252 2.252 0 0115.75 3H18V.75a.75.75 0 011.5 0V3h2.25A2.252 2.252 0 0124 5.25v12a2.252 2.252 0 01-2.25 2.25z"}}),_c('path',{attrs:{"d":"M18.75 10.5c-1.241 0-2.25-1.009-2.25-2.25S17.509 6 18.75 6 21 7.009 21 8.25s-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    