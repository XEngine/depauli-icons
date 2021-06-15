
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h.75v-9H.75a.75.75 0 010-1.5H2l5.8-4.35a.753.753 0 011.192.706.745.745 0 01-.292.494L4.5 12h15l-4.2-3.15a.75.75 0 01.9-1.2L22 12h1.25a.75.75 0 010 1.5h-.75v9h.75a.75.75 0 010 1.5H.75zM21 22.5v-9H3v9h18z"}}),_c('path',{attrs:{"d":"M6 21a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5A.75.75 0 016 21zM9 21a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5A.75.75 0 019 21zM12 21a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5A.75.75 0 0112 21zM18 21a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5A.75.75 0 0118 21zM15 21a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5A.75.75 0 0115 21zM12 7.761a2.252 2.252 0 01-2.25-2.25c0-.96.615-1.808 1.5-2.121V.75a.75.75 0 011.5 0v2.64a2.26 2.26 0 011.5 2.121A2.252 2.252 0 0112 7.761zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    