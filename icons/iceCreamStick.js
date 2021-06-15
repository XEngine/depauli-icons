
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
            children.concat([_c('path',{attrs:{"d":"M10.5 15a.75.75 0 01-.75-.75V3.75a.75.75 0 011.5 0v10.5a.75.75 0 01-.75.75zM13.5 15a.75.75 0 01-.75-.75V3.75a.75.75 0 011.5 0v10.5a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M12 24a.75.75 0 01-.75-.75V18H7.5a2.252 2.252 0 01-2.25-2.25v-12A3.754 3.754 0 019 0h6a3.754 3.754 0 013.75 3.75v12A2.252 2.252 0 0116.5 18h-3.75v5.25A.75.75 0 0112 24zM9 1.5a2.252 2.252 0 00-2.25 2.25v12c0 .414.336.75.75.75h9a.75.75 0 00.75-.75v-12A2.252 2.252 0 0015 1.5H9z"}})])
          )
        }
      }
    