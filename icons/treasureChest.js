
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
            children.concat([_c('path',{attrs:{"d":"M1.75 22.5C.785 22.5 0 21.715 0 20.75V4.25A2.754 2.754 0 012.75 1.5h18.5A2.754 2.754 0 0124 4.25v16.5c0 .965-.785 1.75-1.75 1.75H1.75zm20.5-1.5a.25.25 0 00.25-.25V13.5h-3V21h2.75zM18 21v-7.5h-1.761A4.48 4.48 0 0115 15.351V21h3zm-4.5 0v-4.76c-.481.172-.983.26-1.5.26a4.412 4.412 0 01-1.5-.26V21h3zM9 21v-5.649A4.48 4.48 0 017.761 13.5H6V21h3zm-7.5-.25c0 .138.112.25.25.25H4.5v-7.5h-3v7.25zM9 12c0 1.654 1.346 3 3 3s3-1.346 3-3v-1.5H9V12zm13.5 0v-1.5h-6V12h6zm-15 0v-1.5h-6V12h6zm15-3V4.25c0-.689-.561-1.25-1.25-1.25H19.5v6h3zM18 9V3h-3v6h3zm-4.5 0V3h-3v6h3zM9 9V3H6v6h3zM4.5 9V3H2.75c-.689 0-1.25.561-1.25 1.25V9h3z"}}),_c('circle',{attrs:{"cx":"12","cy":"12.75","r":"1.125"}})])
          )
        }
      }
    