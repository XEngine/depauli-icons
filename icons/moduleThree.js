
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V15a2.252 2.252 0 012.25-2.25H9A2.252 2.252 0 0111.25 15v6.75A2.252 2.252 0 019 24H2.25zm0-9.75a.75.75 0 00-.75.75v6.75c0 .414.336.75.75.75H9a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H2.25zM15 24a2.252 2.252 0 01-2.25-2.25V15A2.252 2.252 0 0115 12.75h6.75A2.252 2.252 0 0124 15v6.75A2.252 2.252 0 0121.75 24H15zm0-9.75a.75.75 0 00-.75.75v6.75c0 .414.336.75.75.75h6.75a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H15zM8.625 11.25A2.252 2.252 0 016.375 9V2.25A2.252 2.252 0 018.625 0h6.75a2.252 2.252 0 012.25 2.25V9a2.252 2.252 0 01-2.25 2.25h-6.75zm0-9.75a.75.75 0 00-.75.75V9c0 .414.336.75.75.75h6.75a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75h-6.75z"}})])
          )
        }
      }
    