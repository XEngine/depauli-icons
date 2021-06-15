
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
            children.concat([_c('path',{attrs:{"d":"M.75 23a.75.75 0 010-1.5h1.5v-8.25H.75a.75.75 0 010-1.5h1.5v-1.5a.75.75 0 011.5 0v3h3V11.5c0-.689.561-1.25 1.25-1.25h1V3.811c0-.401.156-.778.44-1.062l1.5-1.5A1.488 1.488 0 0111.999.81c.401 0 .777.156 1.06.438L14.56 2.75c.284.283.44.66.44 1.061v6.439h1c.689 0 1.25.561 1.25 1.25v1.75h3v-3a.75.75 0 011.5 0v1.5h1.5a.75.75 0 010 1.5h-1.5v8.25h1.5a.75.75 0 010 1.5H.75zm19.5-1.5v-6.75h-3v6.75h3zm-4.5 0v-9.75h-7.5v9.75h1.5v-3A2.252 2.252 0 0112 16.25a2.252 2.252 0 012.25 2.25v3h1.5zm-3 0v-3a.75.75 0 00-1.5 0v3h1.5zm-6 0v-6.75h-3v6.75h3zm6.75-11.25V3.811l-1.5-1.5-1.5 1.5v6.44h3z"}})])
          )
        }
      }
    