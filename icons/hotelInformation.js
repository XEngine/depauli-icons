
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
            children.concat([_c('path',{attrs:{"d":"M18 12c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6zm0-10.5c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5z"}}),_c('path',{attrs:{"d":"M18 9.375a.75.75 0 01-.75-.75V6a.75.75 0 011.5 0v2.625a.75.75 0 01-.75.75z"}}),_c('circle',{attrs:{"cx":"18","cy":"3.756","r":"1.125"}}),_c('path',{attrs:{"d":"M23.25 24a.75.75 0 01-.75-.75v-.75h-21v.75a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0V18h2.652a3.004 3.004 0 012.598-4.5A3.004 3.004 0 019.348 18H10.5v-3.75a.75.75 0 01.75-.75h10A2.754 2.754 0 0124 16.25v7a.75.75 0 01-.75.75zm-.75-3v-1.5h-21V21h21zm0-3v-1.75c0-.689-.561-1.25-1.25-1.25H12v3h10.5zM6.75 15c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    