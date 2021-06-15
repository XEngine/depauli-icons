
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
            children.concat([_c('path',{attrs:{"d":"M9 24a.75.75 0 010-1.5h2.25v-2.25H7.5A2.252 2.252 0 015.25 18V2.25A2.252 2.252 0 017.5 0h9a2.252 2.252 0 012.25 2.25V18a2.252 2.252 0 01-2.25 2.25h-3.75v2.25H15a.75.75 0 010 1.5H9zm-2.25-6c0 .414.336.75.75.75h9a.75.75 0 00.75-.75v-1.5H6.75V18zm10.5-3V5.25H6.75V15h10.5zm0-11.25v-1.5a.75.75 0 00-.75-.75h-9a.75.75 0 00-.75.75v1.5h10.5z"}})])
          )
        }
      }
    