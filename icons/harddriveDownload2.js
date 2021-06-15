
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
            children.concat([_c('path',{attrs:{"d":"M11.999 11.251a.731.731 0 01-.261-.048l-.021-.007a.74.74 0 01-.249-.166L8.469 8.031c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l1.72 1.72V.751a.75.75 0 011.5 0V8.69l1.72-1.72a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-3 2.999a.74.74 0 01-.245.163l-.025.009a.694.694 0 01-.26.05zM5.249 19.501a.75.75 0 010-1.5h3.75a.75.75 0 010 1.5h-3.75z"}}),_c('path',{attrs:{"d":"M5.249 24.001c-2.895 0-5.25-2.355-5.25-5.25s2.355-5.25 5.25-5.25h13.5c2.895 0 5.25 2.355 5.25 5.25s-2.355 5.25-5.25 5.25h-13.5zm0-9c-2.068 0-3.75 1.682-3.75 3.75s1.682 3.75 3.75 3.75h13.5c2.068 0 3.75-1.682 3.75-3.75s-1.682-3.75-3.75-3.75h-13.5z"}}),_c('circle',{attrs:{"cx":"15.374","cy":"18.751","r":"1.125"}}),_c('circle',{attrs:{"cx":"19.124","cy":"18.751","r":"1.125"}})])
          )
        }
      }
    