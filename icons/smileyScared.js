
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('circle',{attrs:{"cx":"8.25","cy":"9","r":"1.125"}}),_c('circle',{attrs:{"cx":"15.75","cy":"9","r":"1.125"}}),_c('path',{attrs:{"d":"M8.25 18C7.009 18 6 16.991 6 15.75s1.009-2.25 2.25-2.25h7.5c1.241 0 2.25 1.009 2.25 2.25S16.991 18 15.75 18h-7.5zm0-3a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z"}})])
          )
        }
      }
    