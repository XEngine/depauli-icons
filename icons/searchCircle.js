
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M17.25 18a.743.743 0 01-.53-.22l-2.543-2.544a5.12 5.12 0 01-3.052 1.014C8.299 16.25 6 13.951 6 11.125S8.299 6 11.125 6s5.125 2.299 5.125 5.125a5.122 5.122 0 01-1.013 3.051l2.543 2.544c.142.142.22.33.22.53a.746.746 0 01-.75.75zM11.125 7.5C9.126 7.5 7.5 9.126 7.5 11.125s1.626 3.625 3.625 3.625 3.625-1.626 3.625-3.625S13.124 7.5 11.125 7.5z"}})])
          )
        }
      }
    