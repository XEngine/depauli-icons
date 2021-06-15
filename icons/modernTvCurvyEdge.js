
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
            children.concat([_c('path',{attrs:{"d":"M7.5 22.026a.75.75 0 010-1.5h3.75v-2.994a84.38 84.38 0 00-8.744.533A2.249 2.249 0 010 15.83V4.222a2.253 2.253 0 012.506-2.235 84.233 84.233 0 0018.988 0A2.248 2.248 0 0124 4.222v11.605c.001.6-.232 1.165-.656 1.591a2.234 2.234 0 01-1.846.648 84.197 84.197 0 00-8.748-.534v2.994h3.75a.75.75 0 010 1.5h-9zM2.25 3.473a.75.75 0 00-.75.75V15.83a.752.752 0 00.837.745 85.513 85.513 0 019.633-.548l.031-.001.026.001c3.213.001 6.456.185 9.64.548a.748.748 0 00.834-.746V4.222a.749.749 0 00-.835-.745 85.668 85.668 0 01-19.33 0 .825.825 0 00-.086-.004z"}})])
          )
        }
      }
    