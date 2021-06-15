
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
            children.concat([_c('path',{attrs:{"d":"M21.75 24.001a.75.75 0 01-.75-.75V18H3v5.251a.75.75 0 01-1.5 0V18C.673 18 0 17.327 0 16.5V15c0-.827.673-1.5 1.5-1.5h7.615l.645-3.873A.749.749 0 0110.5 9h.75V7.5A5.256 5.256 0 016 2.25a.75.75 0 011.5 0A3.754 3.754 0 0011.25 6h.129A2.26 2.26 0 0113.5 4.5h2.25A2.252 2.252 0 0018 2.25a.75.75 0 011.5 0A3.754 3.754 0 0115.75 6H13.5a.75.75 0 00-.75.75V9h.75c.368 0 .679.264.74.627l.646 3.873H22.5c.827 0 1.5.673 1.5 1.5v1.5c0 .827-.673 1.5-1.5 1.5v5.251a.75.75 0 01-.75.75zM1.5 16.5h21V15h-21v1.5zm11.865-3l-.5-3h-1.729l-.5 3h2.729z"}}),_c('circle',{attrs:{"cx":"21","cy":"5.25","r":"1.125"}}),_c('circle',{attrs:{"cx":"4.5","cy":"6.75","r":"1.125"}}),_c('circle',{attrs:{"cx":"11.25","cy":"1.125","r":"1.125"}})])
          )
        }
      }
    