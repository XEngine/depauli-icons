
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
            children.concat([_c('path',{attrs:{"d":"M21.75 13.5a.75.75 0 010-1.5.75.75 0 00.75-.75v-.75h-21v.75c0 .414.336.75.75.75a.75.75 0 010 1.5A2.252 2.252 0 010 11.25v-7.5A3.754 3.754 0 013.75 0h16.5A3.754 3.754 0 0124 3.75v7.5a2.252 2.252 0 01-2.25 2.25zM22.5 9V3.75a2.252 2.252 0 00-2.25-2.25H3.75A2.252 2.252 0 001.5 3.75V9h21z"}}),_c('circle',{attrs:{"cx":"19.5","cy":"4.5","r":"1.125"}}),_c('path',{attrs:{"d":"M2.25 21a.75.75 0 010-1.5 2.252 2.252 0 002.25-2.25v-3a.75.75 0 011.5 0v3A3.754 3.754 0 012.25 21zM8.25 24a.75.75 0 010-1.5.75.75 0 00.75-.75v-7.5a.75.75 0 011.5 0v7.5A2.252 2.252 0 018.25 24zM21.75 21A3.754 3.754 0 0118 17.25v-3a.75.75 0 011.5 0v3a2.252 2.252 0 002.25 2.25.75.75 0 010 1.5zM15.75 24a2.252 2.252 0 01-2.25-2.25v-7.5a.75.75 0 011.5 0v7.5c0 .414.336.75.75.75a.75.75 0 010 1.5z"}})])
          )
        }
      }
    