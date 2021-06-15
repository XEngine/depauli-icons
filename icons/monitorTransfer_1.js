
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
            children.concat([_c('path',{attrs:{"d":"M4.5 24.001a.75.75 0 010-1.5H6v-1.5H2.25A2.252 2.252 0 010 18.751v-4.5a2.252 2.252 0 012.25-2.25h9a2.252 2.252 0 012.25 2.25v4.5a2.252 2.252 0 01-2.25 2.25H7.5v1.5H9a.75.75 0 010 1.5H4.5zm-2.25-10.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h9a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-9zM15 12.001a.75.75 0 010-1.5h1.5v-1.5h-3.75a2.252 2.252 0 01-2.25-2.25v-4.5a2.252 2.252 0 012.25-2.25h9A2.252 2.252 0 0124 2.251v4.5a2.252 2.252 0 01-2.25 2.25H18v1.5h1.5a.75.75 0 010 1.5H15zm-2.25-10.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h9a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-9zM5.25 10.501a.731.731 0 01-.261-.048l-.021-.007a.74.74 0 01-.249-.166L2.47 8.031c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l.97.969V6.751a3.754 3.754 0 013.75-3.75.75.75 0 010 1.5A2.252 2.252 0 006 6.751V7.94l.97-.97a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.39-.22.531L5.781 10.28a.74.74 0 01-.245.163l-.025.009a.723.723 0 01-.261.049z"}})])
          )
        }
      }
    