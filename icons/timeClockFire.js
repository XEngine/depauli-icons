
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
            children.concat([_c('path',{attrs:{"d":"M13.746 19.5a.744.744 0 01-.449-.15l-3-2.25a.753.753 0 01-.3-.6v-3.75a.75.75 0 011.5 0v3.375l2.7 2.025a.75.75 0 01-.451 1.35z"}}),_c('path',{attrs:{"d":"M11.665 24c-4.135 0-7.5-3.365-7.5-7.5 0-.088.002-.178.006-.274-1.609-.859-2.753-2.551-3.08-4.577-.424-2.627.543-5.232 2.588-6.97a.748.748 0 011.223.437 2.014 2.014 0 001.635 1.619C7.409 2.571 10.78 0 15.415 0a.747.747 0 01.68 1.066 4.97 4.97 0 001.138 5.716l.104.003c.931 0 1.719-.699 1.833-1.626a.746.746 0 01.745-.659.75.75 0 01.527.216 8.26 8.26 0 012.473 5.771c.024 2.545-1.441 4.782-3.755 5.777.003.083.005.161.005.236 0 4.135-3.365 7.5-7.5 7.5zm0-13.5c-3.308 0-6 2.692-6 6s2.692 6 6 6 6-2.692 6-6-2.692-6-6-6zm0-1.5a7.488 7.488 0 017.281 5.706 4.706 4.706 0 002.469-4.199 6.71 6.71 0 00-1.24-3.799 3.374 3.374 0 01-3.247 1.551 2.618 2.618 0 01-.132-.019.753.753 0 01-.363-.167 6.477 6.477 0 01-2.095-6.518c-3.558.375-5.945 2.605-6.43 6.05a.75.75 0 01-.665.641c-.12.013-.243.019-.363.019a3.55 3.55 0 01-2.99-1.676 5.98 5.98 0 00-1.318 4.821c.219 1.359.879 2.497 1.837 3.197A7.497 7.497 0 0111.665 9z"}})])
          )
        }
      }
    