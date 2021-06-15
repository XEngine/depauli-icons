
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75v-12A2.252 2.252 0 012.25 9h3V5.77a1.514 1.514 0 01.925-1.383L7.5 3.701V.751a.75.75 0 011.5 0v2.174L14.392.134a.587.587 0 01.081-.036 1.498 1.498 0 012.027 1.4V8.25a.75.75 0 01-.75.75H12a.75.75 0 010-1.5h3V6h-1.5a.75.75 0 010-1.5H15V1.508L6.832 5.736a.73.73 0 01-.082.036V9A2.252 2.252 0 019 11.25V22.5h.75a.75.75 0 010 1.5h-9zm6.75-1.5V11.25a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75V12H3a.75.75 0 010 1.5H1.5V15h3a.75.75 0 010 1.5h-3v6h6z"}}),_c('path',{attrs:{"d":"M17.25 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.528 24 17.25 20.972 24 17.25 24zm0-12C14.355 12 12 14.355 12 17.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.145 12 17.25 12z"}}),_c('path',{attrs:{"d":"M15 20.249a.752.752 0 01-.53-1.281l4.5-4.499a.744.744 0 011.06 0 .752.752 0 010 1.061l-4.5 4.499a.743.743 0 01-.53.22z"}}),_c('circle',{attrs:{"cx":"15","cy":"15","r":"1.125"}}),_c('circle',{attrs:{"cx":"19.5","cy":"19.5","r":"1.125"}})])
          )
        }
      }
    