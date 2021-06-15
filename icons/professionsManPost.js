
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
            children.concat([_c('path',{attrs:{"d":"M11.949 4.875c-.62 0-1.125-.505-1.125-1.125s.505-1.125 1.125-1.125 1.125.505 1.125 1.125-.505 1.125-1.125 1.125z"}}),_c('path',{attrs:{"d":"M5.199 7.5a.75.75 0 010-1.5h.751V3.901a2.266 2.266 0 011.358-2.087L11.06.186c.281-.122.581-.184.89-.184.309 0 .609.062.89.185l3.749 1.627a2.272 2.272 0 011.362 2.091V6h.749a.75.75 0 010 1.5H5.199zM16.45 6V3.901a.774.774 0 00-.461-.713l-3.747-1.626a.736.736 0 00-.585-.001l-3.75 1.627a.772.772 0 00-.457.709V6h9zM2.314 24.001a.748.748 0 01-.742-.866 10.475 10.475 0 0110.189-8.88.625.625 0 01.13-.003l.058-.001a10.453 10.453 0 0110.376 8.883.745.745 0 01-.135.558.744.744 0 01-.605.308.755.755 0 01-.741-.634 8.998 8.998 0 00-8.259-7.591v7.475a.75.75 0 01-1.5 0v-7.458c-4.112.384-7.386 3.448-8.03 7.574a.747.747 0 01-.741.635zM11.959 13.505a5.252 5.252 0 01-5.187-4.379.749.749 0 111.479-.249 3.752 3.752 0 005.872 2.432 3.725 3.725 0 001.523-2.432.747.747 0 011.35-.31.748.748 0 01.129.56 5.213 5.213 0 01-2.133 3.405 5.209 5.209 0 01-3.033.973z"}}),_c('path',{attrs:{"d":"M14.834 22.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    