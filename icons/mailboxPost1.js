
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24a.75.75 0 010-1.5h.75V6H3a.75.75 0 010-1.5h1.558C4.926 1.95 7.143 0 9.75 0h4.5c2.607 0 4.824 1.95 5.192 4.5H21A.75.75 0 0121 6h-1.5v16.5h.75a.75.75 0 010 1.5H3.75zM18 22.5V6H6v16.5h1.5v-8.25A2.252 2.252 0 019.75 12h4.5a2.252 2.252 0 012.25 2.25v8.25H18zm-3 0v-8.25a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75v8.25h6zm2.924-18c-.352-1.712-1.892-3-3.674-3h-4.5c-1.782 0-3.322 1.288-3.674 3h11.848z"}}),_c('path',{attrs:{"d":"M9 9a.75.75 0 010-1.5h6A.75.75 0 0115 9H9z"}}),_c('circle',{attrs:{"cx":"12","cy":"16.125","r":"1.125"}})])
          )
        }
      }
    