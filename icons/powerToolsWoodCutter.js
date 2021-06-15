
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
            children.concat([_c('path',{attrs:{"d":"M3 19.5c-1.654 0-3-1.346-3-3a.75.75 0 011.5 0c0 .827.673 1.5 1.5 1.5h10.5v-3H9c-.827 0-1.5-.673-1.5-1.5V12H6v3.75a.75.75 0 01-1.5 0V12c-.827 0-1.5-.673-1.5-1.5V3.75A3.754 3.754 0 016.75 0h9.75C20.635 0 24 3.365 24 7.5S20.635 15 16.5 15H15v3h2.25a.75.75 0 010 1.5H3zm3.75-18A2.252 2.252 0 004.5 3.75v6.75h3c.827 0 1.5.673 1.5 1.5v1.5h7.5c3.308 0 6-2.692 6-6s-2.692-6-6-6H6.75zM5.25 24a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M14.25 10.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM15.75 7.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}}),_c('circle',{attrs:{"cx":"6.75","cy":"3.75","r":"1.125"}})])
          )
        }
      }
    