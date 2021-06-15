
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
            children.concat([_c('path',{attrs:{"d":"M15 15.75a2.252 2.252 0 01-2.25-2.25v-3c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v3A2.252 2.252 0 0115 15.75zm0-6a.75.75 0 00-.75.75v3a.75.75 0 001.5 0v-3a.75.75 0 00-.75-.75z"}}),_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M10.5 15.75a.75.75 0 01-.75-.75v-1.5H7.5a.75.75 0 01-.75-.75V12a3.754 3.754 0 013.75-3.75.75.75 0 01.75.75v6a.75.75 0 01-.75.75zM9.75 12V9.879A2.264 2.264 0 008.25 12h1.5z"}})])
          )
        }
      }
    