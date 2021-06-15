
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
            children.concat([_c('path',{attrs:{"d":"M2.25 21A2.252 2.252 0 010 18.75V5.25A2.252 2.252 0 012.25 3h19.5A2.252 2.252 0 0124 5.25v13.5A2.252 2.252 0 0121.75 21H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V9h-21v9.75zm21-11.25V5.25a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75V7.5h21z"}}),_c('path',{attrs:{"d":"M5.25 13.5a.75.75 0 010-1.5h8.25a.75.75 0 010 1.5H5.25zM5.25 16.5a.75.75 0 010-1.5h5.25a.75.75 0 010 1.5H5.25z"}})])
          )
        }
      }
    