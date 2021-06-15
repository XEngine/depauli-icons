
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
            children.concat([_c('path',{attrs:{"d":"M9 24a.75.75 0 01-.75-.75 3.74 3.74 0 011.5-3.002V13.5H7.5a2.252 2.252 0 01-2.25-2.25v-.75a.75.75 0 011.5 0v.75c0 .414.336.75.75.75h2.25V6h-4.5A2.252 2.252 0 013 3.75V3a.75.75 0 011.5 0v.75c0 .414.336.75.75.75h4.5V2.25A2.252 2.252 0 0112 0a2.252 2.252 0 012.25 2.25V3h2.25a.75.75 0 00.75-.75V1.5a.75.75 0 011.5 0v.75A2.252 2.252 0 0116.5 4.5h-2.25V9h4.5a.75.75 0 00.75-.75V7.5a.75.75 0 011.5 0v.75a2.252 2.252 0 01-2.25 2.25h-4.5v9.748a3.742 3.742 0 011.5 3.002c0 .413-.337.75-.75.75H9zm5.121-1.5a2.269 2.269 0 00-.996-1.201.751.751 0 01-.375-.649V2.25a.75.75 0 00-1.5 0v18.4a.754.754 0 01-.375.65c-.464.268-.817.7-.995 1.2h4.241z"}})])
          )
        }
      }
    