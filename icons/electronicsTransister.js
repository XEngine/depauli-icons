
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
            children.concat([_c('path',{attrs:{"d":"M16.5 24a.75.75 0 01-.75-.75V13.5h-3v9.75a.75.75 0 01-1.5 0V13.5h-3v9.75a.75.75 0 01-1.5 0V13.5H4.5a.75.75 0 010-1.5h.75V2.25A2.252 2.252 0 017.5 0h9a2.252 2.252 0 012.25 2.25V12h.75a.75.75 0 010 1.5h-2.25v9.75a.75.75 0 01-.75.75zm.75-12V2.25a.75.75 0 00-.75-.75h-9a.75.75 0 00-.75.75V12h10.5z"}})])
          )
        }
      }
    