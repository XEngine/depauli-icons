
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
            children.concat([_c('path',{attrs:{"d":"M7.5 24a2.252 2.252 0 01-2.25-2.25V8.25A2.252 2.252 0 017.5 6h.286l2.25-4.5H9A.75.75 0 019 0h4.5a.75.75 0 010 1.5h-1.036l2.25 4.5H15a2.252 2.252 0 012.25 2.25v13.5A2.252 2.252 0 0115 24H7.5zm-.75-2.25c0 .414.336.75.75.75H15a.75.75 0 00.75-.75v-1.5h-9v1.5zm9-3v-7.5h-9v7.5h9zm0-9v-1.5A.75.75 0 0015 7.5H7.5a.75.75 0 00-.75.75v1.5h9zM13.036 6L11.25 2.427 9.464 6h3.572z"}})])
          )
        }
      }
    