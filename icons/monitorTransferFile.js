
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
            children.concat([_c('path',{attrs:{"d":"M17.25 10.5A2.252 2.252 0 0115 8.25v-6A2.252 2.252 0 0117.25 0h3.128c.602 0 1.167.234 1.592.66l1.372 1.371c.424.425.658.99.658 1.591V8.25a2.252 2.252 0 01-2.25 2.25h-4.5zm0-9a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75V6h-2.25A2.252 2.252 0 0118 3.75V1.5h-.75zm2.25 2.25c0 .414.336.75.75.75h2.25v-.878a.758.758 0 00-.219-.531L20.909 1.72a.745.745 0 00-.531-.22H19.5v2.25zM5.25 10.5a.731.731 0 01-.261-.048l-.021-.007a.74.74 0 01-.249-.166L2.47 8.03c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l.97.97V5.25A2.252 2.252 0 016.75 3h6a.75.75 0 010 1.5h-6a.75.75 0 00-.75.75v2.689l.97-.97a.746.746 0 011.06.001c.142.141.22.33.22.53s-.078.389-.22.53l-2.249 2.25a.74.74 0 01-.245.163l-.025.009a.743.743 0 01-.261.048zM4.5 24a.75.75 0 010-1.5H6V21H2.25A2.252 2.252 0 010 18.75v-4.5A2.252 2.252 0 012.25 12h9a2.252 2.252 0 012.25 2.25v4.5A2.252 2.252 0 0111.25 21H7.5v1.5H9A.75.75 0 019 24H4.5zM2.25 13.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h9a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-9z"}})])
          )
        }
      }
    