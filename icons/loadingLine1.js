
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
            children.concat([_c('path',{attrs:{"d":"M4.5 16.497a4.505 4.505 0 01-4.5-4.5c0-2.481 2.019-4.5 4.5-4.5S9 9.516 9 11.997s-2.019 4.5-4.5 4.5zm0-7.5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zM14.25 15.747a3.754 3.754 0 01-3.75-3.75 3.754 3.754 0 013.75-3.75 3.754 3.754 0 013.75 3.75 3.754 3.754 0 01-3.75 3.75zm0-6a2.252 2.252 0 00-2.25 2.25c0 1.241 1.009 2.25 2.25 2.25s2.25-1.009 2.25-2.25a2.252 2.252 0 00-2.25-2.25zM21.75 14.247a2.252 2.252 0 01-2.25-2.25c0-1.241 1.009-2.25 2.25-2.25S24 10.756 24 11.997a2.252 2.252 0 01-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    