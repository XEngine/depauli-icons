
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
            children.concat([_c('path',{attrs:{"d":"M12 23.25a.75.75 0 01-.75-.75V21h-1.5a.75.75 0 010-1.5h1.5V18a.75.75 0 011.5 0v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M16.5 24a.75.75 0 010-1.5h5.25a.75.75 0 00.75-.75V19.5h-6a.75.75 0 010-1.5h6v-4.5h-21V18h6a.75.75 0 010 1.5h-6v2.25c0 .414.336.75.75.75H7.5a.75.75 0 010 1.5H2.25A2.252 2.252 0 010 21.75V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v19.5A2.252 2.252 0 0121.75 24H16.5zm6-12V7.5h-21V12h21zm0-6V2.25a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75V6h21z"}}),_c('circle',{attrs:{"cx":"19.5","cy":"9.794","r":"1.125"}}),_c('circle',{attrs:{"cx":"19.5","cy":"15.748","r":"1.125"}}),_c('circle',{attrs:{"cx":"19.5","cy":"3.706","r":"1.125"}})])
          )
        }
      }
    