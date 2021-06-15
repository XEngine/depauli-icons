
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
            children.concat([_c('path',{attrs:{"d":"M2.5 23.25c-.965 0-1.75-.785-1.75-1.75v-19c0-.965.785-1.75 1.75-1.75h19c.965 0 1.75.785 1.75 1.75v19c0 .965-.785 1.75-1.75 1.75h-19zm0-21a.25.25 0 00-.25.25v19c0 .138.112.25.25.25h19a.25.25 0 00.25-.25v-19a.25.25 0 00-.25-.25h-19z"}}),_c('circle',{attrs:{"cx":"6","cy":"12","r":"1.125"}}),_c('circle',{attrs:{"cx":"12","cy":"12","r":"1.125"}}),_c('circle',{attrs:{"cx":"18","cy":"12","r":"1.125"}}),_c('circle',{attrs:{"cx":"9","cy":"15","r":"1.125"}}),_c('circle',{attrs:{"cx":"15","cy":"15","r":"1.125"}}),_c('circle',{attrs:{"cx":"6","cy":"18","r":"1.125"}}),_c('circle',{attrs:{"cx":"12","cy":"18","r":"1.125"}}),_c('circle',{attrs:{"cx":"18","cy":"18","r":"1.125"}})])
          )
        }
      }
    