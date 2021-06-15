
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
            children.concat([_c('path',{attrs:{"d":"M5.25 2.873a.75.75 0 010-1.5h15a.75.75 0 010 1.5h-15zM5.25 8.873a.75.75 0 010-1.5h15a.75.75 0 010 1.5h-15zM5.25 14.873a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}}),_c('circle',{attrs:{"cx":"1.125","cy":"2.123","r":"1.125"}}),_c('circle',{attrs:{"cx":"1.125","cy":"8.123","r":"1.125"}}),_c('circle',{attrs:{"cx":"1.125","cy":"14.123","r":"1.125"}}),_c('path',{attrs:{"d":"M17.25 23.873c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.401 24 17.123s-3.028 6.75-6.75 6.75zm0-12c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25-2.355-5.25-5.25-5.25z"}}),_c('path',{attrs:{"d":"M14.25 17.873a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    