
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
            children.concat([_c('path',{attrs:{"d":"M7.497 6.75a.75.75 0 010-1.5h9a.75.75 0 010 1.5h-9zM7.497 9.75a.75.75 0 010-1.5h9a.75.75 0 010 1.5h-9zM7.497 12.75a.75.75 0 010-1.5h5.25a.75.75 0 010 1.5h-5.25z"}}),_c('path',{attrs:{"d":"M4.497 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 014.497 0h15a2.252 2.252 0 012.25 2.25v19.5a2.252 2.252 0 01-2.25 2.25h-15zm-.75-2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75V19.5h-16.5v2.25zm16.5-3.75V2.25a.75.75 0 00-.75-.75h-15a.75.75 0 00-.75.75V18h16.5z"}})])
          )
        }
      }
    