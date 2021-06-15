
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
            children.concat([_c('path',{attrs:{"d":"M3 24a.75.75 0 010-1.5h1.875V21H2.25A2.252 2.252 0 010 18.75V15a2.252 2.252 0 012.25-2.25H9A2.252 2.252 0 0111.25 15v3.75A2.252 2.252 0 019 21H6.375v1.5H8.25a.75.75 0 010 1.5H3zm-.75-9.75a.75.75 0 00-.75.75v3.75c0 .414.336.75.75.75H9a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H2.25zM15.75 24a.75.75 0 010-1.5h1.875V21H15a2.252 2.252 0 01-2.25-2.25V15A2.252 2.252 0 0115 12.75h6.75A2.252 2.252 0 0124 15v3.75A2.252 2.252 0 0121.75 21h-2.625v1.5H21a.75.75 0 010 1.5h-5.25zM15 14.25a.75.75 0 00-.75.75v3.75c0 .414.336.75.75.75h6.75a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H15zM9.375 11.25a.75.75 0 010-1.5h1.875v-1.5H8.625A2.252 2.252 0 016.375 6V2.25A2.252 2.252 0 018.625 0h6.75a2.252 2.252 0 012.25 2.25V6a2.252 2.252 0 01-2.25 2.25H12.75v1.5h1.875a.75.75 0 010 1.5h-5.25zm-.75-9.75a.75.75 0 00-.75.75V6c0 .414.336.75.75.75h6.75a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75h-6.75z"}})])
          )
        }
      }
    