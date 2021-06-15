
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
            children.concat([_c('path',{attrs:{"d":"M3.75 21a2.252 2.252 0 01-2.25-2.25V5.25A2.252 2.252 0 013.75 3H7.5a2.26 2.26 0 011.8.9L10.875 6h9.375a2.252 2.252 0 012.25 2.25v10.5A2.252 2.252 0 0120.25 21H3.75zm0-16.5a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75V8.25a.75.75 0 00-.75-.75H10.5a.753.753 0 01-.6-.3L8.1 4.8a.753.753 0 00-.6-.3H3.75z"}})])
          )
        }
      }
    