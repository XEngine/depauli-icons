
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M12 21c-4.135 0-7.5-3.365-7.5-7.5a.75.75 0 011.5 0c0 3.308 2.692 6 6 6s6-2.692 6-6a.75.75 0 011.5 0c0 4.135-3.365 7.5-7.5 7.5z"}}),_c('circle',{attrs:{"cx":"8.25","cy":"9","r":"1.125"}}),_c('path',{attrs:{"d":"M13.629 10.5a.752.752 0 01-.708-1 2.987 2.987 0 011.827-1.827 3.007 3.007 0 013.83 1.827.75.75 0 01-1.414.5 1.504 1.504 0 00-1.914-.913 1.496 1.496 0 00-.914.913.752.752 0 01-.707.5z"}})])
          )
        }
      }
    