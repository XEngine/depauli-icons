
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
            children.concat([_c('path',{attrs:{"d":"M2.249 17.976a2.252 2.252 0 01-2.25-2.25V3.748a2.252 2.252 0 012.25-2.25h2.25V.75a.75.75 0 011.5 0v.748h6V.75a.75.75 0 011.5 0v.748h2.25a2.252 2.252 0 012.25 2.25v2.898a.663.663 0 010 .2v.635a.75.75 0 01-1.5.015h-15v8.229c0 .414.336.75.75.75h5.229a.75.75 0 010 1.5H2.249zm14.25-11.979V3.748a.75.75 0 00-.75-.75h-2.25v.75a.75.75 0 01-1.5 0v-.75h-6v.75a.75.75 0 01-1.5 0v-.75h-2.25a.75.75 0 00-.75.75v2.249h15z"}}),_c('path',{attrs:{"d":"M23.249 24a.748.748 0 01-.53-.219l-3.293-3.29a5.99 5.99 0 01-3.677 1.264c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6a5.99 5.99 0 01-1.262 3.675l3.292 3.289a.752.752 0 01-.53 1.281zm-7.5-12.745c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.018-4.5-4.5-4.5z"}})])
          )
        }
      }
    