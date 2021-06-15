
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
            children.concat([_c('path',{attrs:{"d":"M2.25 22.501A2.252 2.252 0 010 20.251v-12a2.252 2.252 0 012.25-2.25h4.558c.368-2.55 2.584-4.5 5.192-4.5s4.824 1.95 5.192 4.5h4.558A2.252 2.252 0 0124 8.251v12a2.252 2.252 0 01-2.25 2.25H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-6.75h-8.25c0 1.24-1.01 2.249-2.25 2.249a2.253 2.253 0 01-2.25-2.249H1.5v6.75zM12 11.25a.75.75 0 00-.75.75v1.5a.75.75 0 001.5 0V12a.75.75 0 00-.75-.75zm10.5.751v-3.75a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v3.75h8.25V12A2.252 2.252 0 0112 9.75 2.252 2.252 0 0114.25 12v.001h8.25zm-6.828-6c-.352-1.712-1.892-3-3.672-3s-3.32 1.288-3.672 3h7.344z"}})])
          )
        }
      }
    