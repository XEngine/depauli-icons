
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
            children.concat([_c('path',{attrs:{"d":"M2.229 23.999a2.252 2.252 0 01-2.25-2.25v-7.5c-.196-4.688 1.661-7.732 5.52-9.035a4.482 4.482 0 014.583-2.948A5.866 5.866 0 0114.159.003a.745.745 0 01.816.677.752.752 0 01-.678.816 4.319 4.319 0 00-2.606 1.208 4.498 4.498 0 012.531 4.27l8.808 6.212c.243.173.448.393.61.655.224.367.34.775.338 1.188v6.72a2.252 2.252 0 01-2.25 2.25H2.229zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-2.25h-21v2.25zm21-3.75v-3h-21v3h21zm-1.607-4.5l-7.019-4.95a4.475 4.475 0 01-4.125 2.7 4.506 4.506 0 01-4.497-4.327c-2.5 1.12-3.734 3.279-3.761 6.577h19.402zM9.729 3.749c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"}})])
          )
        }
      }
    