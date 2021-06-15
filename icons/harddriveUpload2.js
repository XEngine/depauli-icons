
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
            children.concat([_c('path',{attrs:{"d":"M11.999 11.251a.75.75 0 01-.75-.75V2.562l-1.72 1.72a.744.744 0 01-1.06 0c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53L11.468.223a.74.74 0 01.245-.163l.025-.009a.737.737 0 01.521.001l.02.007c.097.04.179.095.25.166l2.999 2.999c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0l-1.72-1.72v7.939a.748.748 0 01-.749.748zM5.249 19.501a.75.75 0 010-1.5h3.75a.75.75 0 010 1.5h-3.75z"}}),_c('path',{attrs:{"d":"M5.249 24.001c-2.895 0-5.25-2.355-5.25-5.25s2.355-5.25 5.25-5.25h13.5c2.895 0 5.25 2.355 5.25 5.25s-2.355 5.25-5.25 5.25h-13.5zm0-9c-2.068 0-3.75 1.682-3.75 3.75s1.682 3.75 3.75 3.75h13.5c2.068 0 3.75-1.682 3.75-3.75s-1.682-3.75-3.75-3.75h-13.5z"}}),_c('circle',{attrs:{"cx":"15.374","cy":"18.751","r":"1.125"}}),_c('circle',{attrs:{"cx":"19.124","cy":"18.751","r":"1.125"}})])
          )
        }
      }
    