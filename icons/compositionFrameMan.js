
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
            children.concat([_c('path',{attrs:{"d":"M12 14.25a3.379 3.379 0 01-3.375-3.375A3.379 3.379 0 0112 7.5a3.379 3.379 0 013.375 3.375A3.379 3.379 0 0112 14.25zM12 9c-1.034 0-1.875.841-1.875 1.875S10.966 12.75 12 12.75s1.875-.841 1.875-1.875S13.034 9 12 9z"}}),_c('path',{attrs:{"d":"M3.75 19.5a2.252 2.252 0 01-2.25-2.25V6.75A2.252 2.252 0 013.75 4.5h16.5a2.252 2.252 0 012.25 2.25v10.5a2.252 2.252 0 01-2.25 2.25H3.75zm16.5-1.5a.75.75 0 00.75-.75V6.75a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h3.058c.368-2.55 2.584-4.5 5.192-4.5s4.824 1.95 5.192 4.5h3.058zm-4.576 0c-.352-1.712-1.892-3-3.674-3s-3.322 1.288-3.674 3h7.348zM2.25 1.5a.75.75 0 010-1.5h19.5a.75.75 0 010 1.5H2.25zM2.25 24a.75.75 0 010-1.5h19.5a.75.75 0 010 1.5H2.25z"}})])
          )
        }
      }
    