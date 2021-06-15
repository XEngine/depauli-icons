
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
            children.concat([_c('path',{attrs:{"d":"M7.343 24a2.247 2.247 0 01-2.236-2.001L3.81 8.891A2.251 2.251 0 014.5 4.5h1.189L2.47 1.28c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53C2.611.078 2.8 0 3 0s.389.078.53.22L7.81 4.5H19.5a2.249 2.249 0 01.69 4.39l-1.297 13.109A2.247 2.247 0 0116.657 24H7.343zm-.745-2.158a.746.746 0 00.745.658h9.314a.75.75 0 00.745-.665L18.672 9H5.328l.3 3.028c.116-.014.23-.023.342-.028h.001c2.092 0 3.78 1.682 3.78 3.749a3.755 3.755 0 01-3.385 3.732l.232 2.361zm-.381-3.852a2.253 2.253 0 002.033-2.24 2.252 2.252 0 00-2.242-2.25 2.37 2.37 0 00-.233.021l.442 4.469zM4.5 6a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15z"}})])
          )
        }
      }
    