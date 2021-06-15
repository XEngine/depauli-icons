
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
            children.concat([_c('path',{attrs:{"d":"M1.5 24a.75.75 0 010-1.5h.75v-21H1.5a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-.75v21h.75a.75.75 0 010 1.5h-21zm18.75-1.5V21h-7.5v1.5h7.5zm-9 0V21h-7.5v1.5h7.5zm9-3V18h-7.5v1.5h7.5zm-9 0V18h-7.5v1.5h7.5zm9-3v-15h-7.5v15h7.5zm-9 0v-15h-7.5v15h7.5z"}}),_c('path',{attrs:{"d":"M6 15a.75.75 0 01-.75-.75V3.75A.75.75 0 016 3h3a.75.75 0 01.75.75v10.5C9.75 14.664 6 15 6 15zm2.25-1.5v-9h-1.5v9h1.5zM15 15a.75.75 0 01-.75-.75V3.75A.75.75 0 0115 3h3a.75.75 0 01.75.75v10.5A.75.75 0 0118 15h-3zm2.25-1.5v-9h-1.5v9h1.5z"}})])
          )
        }
      }
    