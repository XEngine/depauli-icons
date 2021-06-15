
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
            children.concat([_c('path',{attrs:{"d":"M19.569 16.35a.751.751 0 01-.182-1.478 4.13 4.13 0 002.999-5.004 4.12 4.12 0 00-5.003-2.999 4.113 4.113 0 00-1.345.609.749.749 0 01-1.164-.48 6.7 6.7 0 00-2.816-4.331 6.703 6.703 0 00-5.053-1.072 6.759 6.759 0 00-5.404 7.869 6.719 6.719 0 001.933 3.609.745.745 0 01.015 1.06.747.747 0 01-1.061.016A8.21 8.21 0 01.125 9.738C-.706 5.265 2.257.951 6.73.12a8.243 8.243 0 019.37 5.61 5.687 5.687 0 012.283-.485 5.619 5.619 0 015.458 4.259 5.632 5.632 0 01-4.09 6.823.704.704 0 01-.182.023z"}}),_c('path',{attrs:{"d":"M8.25 24a.75.75 0 01-.75-.75v-8.689l-1.72 1.72a.744.744 0 01-1.06 0 .752.752 0 010-1.061l3-3a.763.763 0 01.246-.164l.027-.01a.755.755 0 01.517.001l.022.008a.747.747 0 01.249.165l2.999 2.999a.752.752 0 01-.53 1.281.743.743 0 01-.53-.22L9 14.561v8.689a.75.75 0 01-.75.75zM15.75 24a.767.767 0 01-.258-.046l-.017-.006a.748.748 0 01-.256-.167l-3-3a.752.752 0 01.53-1.281c.2 0 .389.078.53.22L15 21.44v-8.69a.75.75 0 011.5 0v8.689l1.72-1.72a.744.744 0 011.06 0 .752.752 0 010 1.061l-3 3a.74.74 0 01-.245.163l-.026.01a.73.73 0 01-.259.047z"}})])
          )
        }
      }
    