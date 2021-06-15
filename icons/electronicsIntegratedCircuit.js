
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
            children.concat([_c('path',{attrs:{"d":"M14.25 24a.75.75 0 01-.75-.75V21h-3v2.25a.75.75 0 01-1.5 0V21h-.75A2.252 2.252 0 016 18.75V16.5H3.75a.75.75 0 010-1.5H6v-2.25H3.75a.75.75 0 010-1.5H6V9H3.75a.75.75 0 010-1.5H6V5.25A2.252 2.252 0 018.25 3H9V.75a.75.75 0 011.5 0V3h3V.75a.75.75 0 011.5 0V3h.75A2.252 2.252 0 0118 5.25V7.5h2.25a.75.75 0 010 1.5H18v2.25h2.25a.75.75 0 010 1.5H18V15h2.25a.75.75 0 010 1.5H18v2.25A2.252 2.252 0 0115.75 21H15v2.25a.75.75 0 01-.75.75zm-6-19.5a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75h-7.5z"}})])
          )
        }
      }
    