
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
            children.concat([_c('path',{attrs:{"d":"M4.5 24.011a2.252 2.252 0 01-2.25-2.25V6.011a2.252 2.252 0 012.25-2.25h3.063C7.924 1.633 9.81.011 12 .011c2.19 0 4.076 1.621 4.437 3.75H19.5a2.252 2.252 0 012.25 2.25v15.75a2.252 2.252 0 01-2.25 2.25h-15zm0-18.75a.75.75 0 00-.75.75v15.75c0 .414.336.75.75.75h15a.75.75 0 00.75-.75V6.011a.75.75 0 00-.75-.75h-3.75a.75.75 0 01-.75-.75c0-1.654-1.346-3-3-3s-3 1.346-3 3a.75.75 0 01-.75.75H4.5z"}}),_c('circle',{attrs:{"cx":"12","cy":"4.136","r":"1.125"}})])
          )
        }
      }
    