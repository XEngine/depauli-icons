
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
            children.concat([_c('path',{attrs:{"d":"M1.502 4.503a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM1.502 21.003a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM4.502 16.503a.75.75 0 01-.75-.75v-2.962a.608.608 0 010-.078V8.291l-.002-.038a.75.75 0 01.75-.75h.75c1.654 0 3 1.346 3 3a3.003 3.003 0 01-2.998 3v2.25a.75.75 0 01-.75.75zm.75-4.5c.826-.001 1.498-.674 1.498-1.5s-.672-1.499-1.498-1.5v3zM16.502 16.503a.75.75 0 01-.75-.75v-2.962a.54.54 0 010-.08v-4.42a.75.75 0 01.748-.788h.75c1.654 0 3 1.346 3 3a3.003 3.003 0 01-2.998 3v2.25a.75.75 0 01-.75.75zm.75-4.5c.826-.001 1.498-.674 1.498-1.5s-.672-1.499-1.498-1.5v3zM13.502 16.503a.75.75 0 01-.75-.75v-2.25h-1.5v2.25a.75.75 0 01-1.5 0v-7.5a.75.75 0 011.5 0v3.75h1.5v-3.75a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    