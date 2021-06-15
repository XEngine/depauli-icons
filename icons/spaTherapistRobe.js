
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
            children.concat([_c('path',{attrs:{"d":"M3.748 24a3.754 3.754 0 01-3.75-3.75V6.75A6.758 6.758 0 016.748 0h10.5a6.758 6.758 0 016.75 6.75v13.5a3.754 3.754 0 01-3.75 3.75h-16.5zm16.5-1.5a2.252 2.252 0 002.25-2.25V6.75a5.262 5.262 0 00-4.5-5.195V3a5.989 5.989 0 01-3.046 5.222 3.762 3.762 0 011.546 3.028V22.5h3.75zM5.998 1.555a5.263 5.263 0 00-4.5 5.195v13.5a2.252 2.252 0 002.25 2.25h11.25V11.25A2.252 2.252 0 0012.748 9H12a6.008 6.008 0 01-6.002-6V1.555zM7.498 3c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5V1.5h-9V3z"}}),_c('circle',{attrs:{"cx":"12.748","cy":"12.75","r":"1.125"}}),_c('circle',{attrs:{"cx":"12.748","cy":"18.375","r":"1.125"}})])
          )
        }
      }
    