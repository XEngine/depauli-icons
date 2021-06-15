
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
            children.concat([_c('path',{attrs:{"d":"M11.848 6.752a6.588 6.588 0 01-4.397-1.693.75.75 0 011-1.118 5.134 5.134 0 003.431 1.31l.103-.001.121.001a5.147 5.147 0 003.442-1.31.746.746 0 011.059.058.75.75 0 01-.058 1.059 6.63 6.63 0 01-4.426 1.693l-.139-.001a4.89 4.89 0 01-.136.002z"}}),_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('circle',{attrs:{"cx":"8.25","cy":"9","r":"1.125"}}),_c('circle',{attrs:{"cx":"15.75","cy":"9","r":"1.125"}}),_c('path',{attrs:{"d":"M12 21c-2.068 0-3.75-1.682-3.75-3.75S9.932 13.5 12 13.5s3.75 1.682 3.75 3.75S14.068 21 12 21zm0-6c-1.241 0-2.25 1.009-2.25 2.25S10.759 19.5 12 19.5s2.25-1.009 2.25-2.25S13.241 15 12 15z"}})])
          )
        }
      }
    