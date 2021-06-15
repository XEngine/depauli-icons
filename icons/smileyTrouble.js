
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M9.75 18a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z"}}),_c('circle',{attrs:{"cx":"8.25","cy":"8.25","r":"1.125"}}),_c('circle',{attrs:{"cx":"15.75","cy":"8.25","r":"1.125"}}),_c('path',{attrs:{"d":"M15.75 13.5A4.511 4.511 0 0112 11.478 4.511 4.511 0 018.25 13.5c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5c1.517 0 2.924.775 3.75 2.022A4.511 4.511 0 0115.75 4.5c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5zm0-7.5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm-7.5 0c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"}})])
          )
        }
      }
    